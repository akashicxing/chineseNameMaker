import { pgTable, varchar, integer, date, primaryKey } from 'drizzle-orm/pg-core';

// 用户每日用量表
export const userDailyUsage = pgTable('user_daily_usage', {
  userId: varchar('user_id', { length: 128 }).notNull(), // Google sub 或邮箱
  usageDate: date('usage_date').notNull(), // 日期
  count: integer('count').notNull().default(0), // 当天已用次数
}, (table) => {
  return {
    pk: primaryKey({ columns: [table.userId, table.usageDate] })
  };
}); 