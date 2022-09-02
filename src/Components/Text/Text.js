import { Input, Button } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import './Text.css';

const { TextArea } = Input;

const Text = (
  { textAreaHandle, value }
  ) => (
  <>
    <TextArea
      value={value}
      onChange={textAreaHandle}
      className="text-area"
      showCount
      maxLength={1000}
    />
  </>
);

export default Text;
