'use client';

import { DatePicker as AntDatePicker } from 'antd';
import type { DatePickerProps } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import type { Dayjs } from 'dayjs';
import { useLanguage } from '@/lib/i18n';
import { useEffect, useState } from 'react';
import zhCN from 'antd/lib/date-picker/locale/zh_CN';
import enUS from 'antd/lib/date-picker/locale/en_US';

dayjs.locale('zh-cn');

export interface CustomDatePickerProps extends Omit<DatePickerProps, 'value' | 'onChange'> {
  value?: Date;
  onChange?: (date: Date | null) => void;
  className?: string;
}

export function DatePicker({ value, onChange, className, ...props }: CustomDatePickerProps) {
  const { language } = useLanguage();
  const [locale, setLocale] = useState(enUS);

  useEffect(() => {
    setLocale(language === 'zh' ? zhCN : enUS);
  }, [language]);

  const handleChange = (date: Dayjs | null) => {
    onChange?.(date ? date.toDate() : null);
  };

  return (
    <AntDatePicker
      value={value ? dayjs(value) : null}
      onChange={handleChange}
      className={className}
      locale={locale}
      showToday
      format="YYYY-MM-DD"
      placeholder="Select date of birth"
      {...props}
    />
  );
} 