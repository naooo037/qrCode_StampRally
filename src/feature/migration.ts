import { useCreateRallyAction } from '@/hooks/useCreateRallyAction';
import { useCreateStampAction } from '@/hooks/useCreateStampAction';

export const migrationAct = async () => {
  const useCreateRally = useCreateRallyAction();
  const useCreateStamp = useCreateStampAction();

  const rally = await useCreateRally("テストスタンプラリー", "テスト用のスタンプラリーです");
  useCreateStamp(rally.Id!, "スタンプ1", "スタンプ1の説明", "qr_code1");
  useCreateStamp(rally.Id!, "スタンプ2", "スタンプ2の説明", "qr_code2");
  useCreateStamp(rally.Id!, "スタンプ3", "スタンプ3の説明", "qr_code3");
  useCreateStamp(rally.Id!, "スタンプ4", "スタンプ4の説明", "qr_code4");
  useCreateStamp(rally.Id!, "スタンプ5", "スタンプ5の説明", "qr_code5");
}