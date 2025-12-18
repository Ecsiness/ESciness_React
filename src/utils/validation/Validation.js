import * as yup from "yup";
// for register page
const RegisterSchema = yup.object().shape({
  fName: yup
    .string()
    .min(3, "نام شما باید بیشتر از 3 کاراکتر باشد")
    .required("نام الزامیست"),
  lName: yup
    .string()
    .min(4, "نام خانوادگی شما باید بیشتر از 4 کاراکتر باشد")
    .required("نام خانوادگی الزامیست"),
  email: yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامیست"),
  phone: yup
    .string()
    .required("شماره تماس الزامیست")
    .matches(/^((\+98|0098|0)?9\d{9})$/, "شماره تماس باید متعلق به ایران باشد"),
  userName: yup
    .string()
    .min(4, "نام کاربری شما باید بیشتر از 4 کاراکتر باشد")
    .max(20, "نام کاربری شما باید کمتر از 20 کاراکتر باشد")
    .required("نام کاربری الزامیست"),
  password: yup
    .string()
    .min(8, "رمز عبور شما باید بیشتر از 8 کاراکتر باشد")
    .required("رمز عبور الزامیست"),
  acceptTerms: yup
    .bool()
    .oneOf([true])
    .required('"شما باید شرایط و قوانین را بپذیرید"'),
});
// for login page
const LoginScema = yup.object().shape({
  userName: yup
    .string()
    .min(4, "نام کاربری شما باید بیشتر از 4 کاراکتر باشد")
    .max(20, "نام کاربری شما باید کمتر از 20 کاراکتر باشد")
    .required("نام کاربری الزامیست"),
  password: yup
    .string()
    .min(8, "رمز عبور شما باید بیشتر از 8 کاراکتر باشد")
    .required("رمز عبور الزامیست"),
});
// for consultation page
const FormConsultation = yup.object().shape({
  title: yup
    .string()
    .min(4, "عنوان شما باید بیشتر از چهار کاراکتر باشد")
    .max(10, "عنوان شما باید کمتر از ده کاراکتر باشد")
    .required("عنوان الزامیست"),
  content: yup.string().required("متن درخواست الزامیست"),
});
// for contact page
const FormContactus = yup.object().shape({
  fName: yup
    .string()
    .min(3, "نام شما باید بیشتر از 3 کاراکتر باشد")
    .required("نام الزامیست"),
  lName: yup
    .string()
    .min(4, "نام خانوادگی شما باید بیشتر از 4 کاراکتر باشد")
    .required("نام خانوادگی الزامیست"),
  email: yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامیست"),
  phone: yup
    .string()
    .required("شماره تماس الزامیست")
    .matches(/^((\+98|0098|0)?9\d{9})$/, "شماره تماس باید متعلق به ایران باشد"),
  content: yup.string().required("متن درخواست الزامیست"),
});
// for weblog page
const FormCounsel = yup.object().shape({
  fName: yup
    .string()
    .min(3, "نام شما باید بیشتر از 3 کاراکتر باشد")
    .required("نام الزامیست"),
  phone: yup
    .string()
    .required("شماره تماس الزامیست")
    .matches(/^((\+98|0098|0)?9\d{9})$/, "شماره تماس باید متعلق به ایران باشد"),
  content: yup.string().required("متن درخواست الزامیست"),
});

export {
  RegisterSchema,
  LoginScema,
  FormConsultation,
  FormCounsel,
  FormContactus,
};
