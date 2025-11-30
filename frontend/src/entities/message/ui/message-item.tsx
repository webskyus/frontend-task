import React from 'react';
import { Message } from '@entities/message/model/type';
import { Avatar, AvatarFallback } from '@shared/ui/avatar';
import dateFormatter from '@entities/message/model/date-formatter';

interface Props {
  message: Message;
}

const MessageItem: React.FC<Props> = ({ message }) => {
  return (
    <article className='flex items-start space-x-[12px]  p-[12px]'>
      <Avatar className={'!rounded-none'}>
        <AvatarFallback
          className={'w-[40px] h-[40px] bg-linear-65 from-purple-500 to-pink-500 !rounded-[8px]'}
        >
          <span className='text-[clamp(14px,4vw,18px)] text-white'>
            {message.name.slice(0, 2).toUpperCase()}
          </span>
        </AvatarFallback>
      </Avatar>

      <div className={'flex flex-col flex-1 space-y-[10px] text-white'}>
        <h5 className={'text-[17px] font-bold '}>{message.name}</h5>
        <p
          className={
            'p-[10px] px-[15px] text-[14px] leading-[18px] rounded-[8px] bg-blue-950/10 border border-white/10'
          }
        >
          {message.comment}
        </p>
        <time className={'text-[12px] text-white/60 ml-auto'} dateTime={message.timestamp}>
          {dateFormatter(message.timestamp)}
        </time>
      </div>
    </article>
  );
};

export default MessageItem;
