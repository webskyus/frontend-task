'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/shared/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { CornerRightUp, Link2 } from 'lucide-react';
import { Textarea } from '@shared/ui/textarea';
import { AssetEditFormSchema, AssetEditFormType } from '@widgets/asset-edit-form/model/schema';
import { Asset } from '@entities/asset/model/type';
import useUpdateAssetDetails from '@features/update-asset-details/model/use-update-asset-details';
import { toast } from 'sonner';
import { Spinner } from '@shared/ui/spinner';

interface Props {
  asset: Asset;
}

const AssetEditForm: React.FC<Props> = ({ asset }) => {
  const { updateDetails, isPending } = useUpdateAssetDetails(
    asset,
    () =>
      toast.success('Changes saved', {
        description: 'The asset information has been updated successfully.',
      }),
    () =>
      toast.error('Unable to update asset', {
        description: 'Please retry or check your internet connection.',
      })
  );

  const form = useForm<AssetEditFormType>({
    resolver: zodResolver(AssetEditFormSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      soundUrl: asset.soundUrl,
      caption: asset.caption,
    },
  });

  const onSubmit = (values: AssetEditFormType) => updateDetails(values);

  const handleRedirectToSoundUrl = () => {
    window.open(form.getValues('soundUrl'), '_blank');
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full mx-auto space-y-8 lg:max-w-[900px] lg:px-[20px]'
      >
        <FormField
          control={form.control}
          name='soundUrl'
          render={({ field }) => (
            <FormItem>
              <FormLabel className={'text-white/80'}>Sound Used</FormLabel>
              <FormControl>
                <div className={'relative flex items-center'}>
                  <Link2
                    className={
                      'absolute left-0 top-0 translate-y-[13px] translate-x-[15px] z-10 text-white'
                    }
                  />

                  <Input
                    placeholder='Sound Used Url'
                    className={
                      'px-[50px] h-[50px] !text-[16px] border-white/10 !bg-blue-950/10  text-white'
                    }
                    {...field}
                  />

                  <Button
                    variant={'link'}
                    onClick={handleRedirectToSoundUrl}
                    className={
                      'absolute right-0 top-0 p-0 translate-x-[-20px] translate-y-[6px] cursor-pointer'
                    }
                    type={'button'}
                  >
                    <CornerRightUp className={' z-10 text-white'} />
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='caption'
          render={({ field }) => (
            <FormItem>
              <FormLabel className={'text-white/80'}>Creator's Caption</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={String("Creator's Caption")}
                  className={
                    'h-[50px] !text-[16px] border-white/10 !bg-blue-950/10  text-white resize-none'
                  }
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          aria-label={'Submit Asset Details Form'}
          type='submit'
          className={'cursor-pointer'}
          disabled={
            form.formState.isLoading ||
            form.formState.isSubmitting ||
            !form.formState.isValid ||
            isPending
          }
        >
          <React.Activity mode={isPending ? 'visible' : 'hidden'}>
            <Spinner />
          </React.Activity>

          <span>Update Asset Details</span>
        </Button>
      </form>
    </Form>
  );
};

export default AssetEditForm;
