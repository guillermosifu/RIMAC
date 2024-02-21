import { userData } from '@/helpers/userData';

export const findUser = (data) => {
  return userData.find(
    ({ document, typeDocument, mobile }) =>
      document === data.document &&
      typeDocument === data.typeDocument &&
      mobile === data.mobile
  );
}
