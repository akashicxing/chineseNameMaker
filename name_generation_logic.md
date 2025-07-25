# 中文名字生成器逻辑说明

## 1. 数据来源

系统使用多个古典文学作品的JSON数据文件作为名字生成的词库：

- `shijing.json` - 诗经
- `chuci.json` - 楚辞
- `tangshi.json` - 唐诗
- `songci.json` - 宋词
- `yuefu.json` - 乐府诗集
- `gushi.json` - 古诗三百首
- `cifu.json` - 辞赋

## 2. 核心处理流程

### 2.1 文本预处理

1. **基础清理**
   - 去除空白字符（空格、换行等）
   - 去除HTML标签（如`<br>`、`<p>`等）
   - 去除括号内的内容

2. **标点符号处理**
   - 去除所有标点符号
   - 使用"！。？；"等标点作为句子分隔符

3. **不良字符过滤**
   - 过滤掉不雅字和负面含义的字
   - 包括：胸、鬼、懒、禽、鸟、鸡、邪、罪等字

### 2.2 名字生成流程

1. **诗文选择**
   ```javascript
   const passage = rand.choose(this.book);
   ```
   - 从选定的文学作品中随机选择一篇诗文

2. **句子提取**
   ```javascript
   const sentenceArr = this.splitSentence(content);
   const sentence = rand.choose(sentenceArr);
   ```
   - 将诗文分割成句子数组
   - 随机选择一个句子作为名字来源

3. **字符清理**
   ```javascript
   const cleanSentence = this.cleanBadChar(this.cleanPunctuation(sentence));
   ```
   - 清理句子中的标点符号
   - 过滤不良字符

4. **名字生成**
   ```javascript
   const name = this.getTwoChar(cleanSentence.split(''));
   ```
   - 从清理后的句子中随机选择两个字
   - 确保选择的两个字不重复
   - 如果遇到重复字，会尝试重新选择（最多100次）

## 3. 返回数据结构

每次生成名字都会返回以下信息：

```javascript
{
    name: "生成的名字",      // 两个字的名字
    sentence: "来源句子",    // 名字来源的完整句子
    content: "完整诗文",     // 完整的诗文内容
    title: "诗文标题",       // 诗文的标题
    author: "作者",          // 诗文的作者
    book: "书籍来源",        // 来自哪部作品
    dynasty: "朝代"          // 诗文的朝代
}
```

## 4. 设计理念

1. **随机性与优质词库**
   - 通过优质的古典文学作品作为词库
   - 即使随机选择也能产生有意境的名字
   - 体现了"词库好，名字就好"的理念

2. **名字特点**
   - 固定为两个字
   - 来源于优美的古典诗文
   - 保留完整的出处信息
   - 有基本的过滤机制确保名字质量

3. **可能的局限性**
   - 完全随机可能产生不太合适的组合
   - 没有考虑字的五行属性
   - 没有考虑生辰八字
   - 没有考虑姓氏搭配

## 5. 使用建议

1. 可以多次生成，选择最满意的名字
2. 查看名字的出处，了解其文化内涵
3. 结合姓氏考虑整体效果
4. 注意查看完整的诗文内容，了解名字的完整意境

## 6. 代码示例

核心的名字生成逻辑：

```javascript
class Namer {
    genName() {
        // 1. 随机选择诗文
        const passage = rand.choose(this.book);
        const { content, title, author, book, dynasty } = passage;

        // 2. 分割并选择句子
        const sentenceArr = this.splitSentence(content);
        const sentence = rand.choose(sentenceArr);

        // 3. 清理文本
        const cleanSentence = this.cleanBadChar(this.cleanPunctuation(sentence));

        // 4. 生成名字
        const name = this.getTwoChar(cleanSentence.split(''));

        // 5. 返回结果
        return {
            name,
            sentence,
            content,
            title,
            author,
            book,
            dynasty,
        };
    }
}
```

## 7. 具体实现细节

### 7.1 文本清理函数

```javascript
formatStr(str) {
    // 去除空白字符和HTML标签
    let res = str.replace(/(\s|　|"|"){1,}|<br>|<p>|<\/p>/g, '');
    // 去除括号内容
    res = res.replace(/\(.+\)/g, '');
    return res;
}

cleanPunctuation(str) {
    // 去除标点符号
    const puncReg = /[<>《》！*\(\^\)\$%~!@#…&%￥—\+=、。，？；''"":·`]/g;
    return str.replace(puncReg, '');
}

cleanBadChar(str) {
    // 过滤不良字符
    const badChars = '胸鬼懒禽鸟鸡我邪罪凶丑仇鼠蟋蟀淫秽妹狐鸡鸭蝇悔鱼肉苦犬吠窥血丧饥女搔父母昏狗蟊疾病痛死潦哀痒害蛇牲妇狸鹅穴畜烂兽靡爪氓劫鬣螽毛婚姻匪婆羞辱'.split('');
    return str.split('').filter(char => badChars.indexOf(char) === -1).join('');
}
```

### 7.2 句子分割函数

```javascript
splitSentence(content) {
    if (!content) {
        return [];
    }
    // 格式化文本
    let str = this.formatStr(content);
    // 添加分隔符
    str = str.replace(/！|。|？|；/g, s => `${s}|`);
    str = str.replace(/\|$/g, '');
    // 分割句子
    let arr = str.split('|');
    // 过滤短句
    arr = arr.filter(item => item.length >= 2);
    return arr;
}
```

### 7.3 名字生成函数

```javascript
getTwoChar(arr) {
    const len = arr.length;
    // 随机选择第一个字
    const first = rand.between(0, len);
    // 随机选择第二个字
    let second = rand.between(0, len);
    let cnt = 0;
    // 确保两个字不重复
    while (second === first) {
        second = rand.between(0, len);
        cnt++;
        if (cnt > 100) {
            break;
        }
    }
    // 按顺序返回两个字
    return first <= second ? `${arr[first]}${arr[second]}` : `${arr[second]}${arr[first]}`;
}
```

## 8. 使用注意事项

1. **数据加载**
   - 首次使用时需要加载相应的文学作品数据
   - 可以通过`loadBook`函数加载不同的文学作品

2. **名字生成**
   - 每次生成都是随机的，可能需要多次尝试
   - 生成的名字会包含完整的出处信息
   - 建议查看名字的来源诗文，了解完整意境

3. **性能考虑**
   - 文本清理和过滤操作可能会影响性能
   - 不良字符列表可以根据需要扩展
   - 句子分割逻辑可以根据实际需求调整

4. **扩展建议**
   - 可以添加更多的文学作品
   - 可以增加名字评分机制
   - 可以添加姓氏搭配建议
   - 可以增加五行属性分析 