'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@shared/ui/button';
import { ArrowUp } from 'lucide-react';
import MessageItem from '@entities/message/ui/message-item';
import { MessageFormSchema, MessageFormType } from '@features/message-panel/model/schema';
import useMessages from '@features/message-panel/model/use-messages';
import useSendMessage from '@features/message-panel/model/use-send-message';
import { Textarea } from '@shared/ui/textarea';
import { Spinner } from '@shared/ui/spinner';
import { Asset } from '@entities/asset/model/type';
import { Form, FormControl, FormField, FormItem } from '@shared/ui/form';

interface Props {
  asset: Asset;
}

const AssetMessagesPanel: React.FC<Props> = ({ asset }) => {
  const bottomRef = React.useRef<HTMLDivElement | null>(null);

  const { messages, isLoading } = useMessages(asset);
  const { send, isPending } = useSendMessage(asset, bottomRef);

  const form = useForm<MessageFormType>({
    resolver: zodResolver(MessageFormSchema),
    mode: 'onChange',
    defaultValues: { message: '' },
  });

  const onSubmit = (values: MessageFormType) => {
    send(values.message);
    form.reset();
  };

  return (
    <>
      <header
        className={`
          flex flex-col flex-1
          p-[16px] space-y-[20px] h-full 
          min-h-[calc(100dvh-150px)]  max-h-[calc(100dvh-150px)] 
          hide-scrollbar-y-mobile overflow-y-auto 
          
          lg:min-h-[80dvh] lg:max-h-[80dvh] 
      `}
      >
        <React.Activity mode={isLoading && !messages.length ? 'visible' : 'hidden'}>
          <p className='flex items-center justify-center space-x-[10px] text-[14px] text-white animate-pulse'>
            <Spinner />
            <span>Loading messages...</span>
          </p>
        </React.Activity>

        <div className={'mt-auto'} />
        {messages.map((m) => (
          <MessageItem key={m.id} message={m} />
        ))}

        <React.Activity mode={!isLoading && !messages.length ? 'visible' : 'hidden'}>
          <p className={'text-center py-[20px] text-[14px] text-white/80'}>
            Empty message list ...
          </p>
        </React.Activity>

        <div ref={bottomRef} />
      </header>

      <Form {...form}>
        <form
          onKeyDown={(e) => e.key === 'Enter' && form.handleSubmit(onSubmit)()}
          onSubmit={form.handleSubmit(onSubmit)}
          className={`
            relative z-1 flex flex-1 min-h-[50px] max-h-[50px]  
            gap-[10px] p-[10px]  
            border-t border-white/10 
            
            lg:p-[16px] lg:flex-1 lg:min-h-[unset] lg:max-h-[unset]
          `}
        >
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem className={'flex-1 !mb-0'}>
                <FormControl>
                  <Textarea
                    placeholder='Write a message...'
                    className='z-0 flex-1  pr-[50px] !text-[16px] resize-none !text-white placeholder:text-white lg:max-h-[150px]'
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            aria-label={'Send Message'}
            type='submit'
            variant={'link'}
            disabled={isPending || !form.formState.isValid}
            className='absolute right-0 top-0 z-10 translate-x-[-35px] translate-y-[15px] p-0  cursor-pointer text-white lg:translate-y-[25px]'
          >
            <React.Activity mode={!isPending ? 'visible' : 'hidden'}>
              <ArrowUp size={22} className='min-w-[20px] min-h-[20px]' />
            </React.Activity>

            <React.Activity mode={isPending ? 'visible' : 'hidden'}>
              <Spinner className='min-w-[24px] min-h-[24px] animate-spin' />
            </React.Activity>
          </Button>
        </form>
      </Form>
    </>
  );
};

export default AssetMessagesPanel;
