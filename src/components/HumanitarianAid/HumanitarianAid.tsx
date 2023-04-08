import { FC } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import cn from "classnames";
import AdminService from "@/services/AdminService";

import { IOffer } from "@/models/data";

import { SectionCaption } from '../SectionCaption/SectionCaption';
import { RoundedButton } from '../RoundedButton/RoundedButton';

import s from './HumanitarianAid.module.scss';
import { IWantToHelpWithHumanitarianAid } from "@/models/text";

interface HumanitarianAidProps {
    HumanitarianAid: IWantToHelpWithHumanitarianAid;
}

const HumanitarianAid: FC<HumanitarianAidProps> = ({ HumanitarianAid }) => {

    const phoneRegExp = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            offer: ""
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(40, "Must be 40 characters or less")
                .required("Required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            phone: Yup.string()
                .matches(phoneRegExp, 'Phone number is not valid')
                .required("Required"),
            offer: Yup.string()
                .required("Required"),
        }),
        onSubmit: (values, actions) => {
            console.log(values);
            actions.setSubmitting(false);
            actions.resetForm({
                values: {
                    name: "",
                    phone: "",
                    email: "",
                    offer: ""
                }
            });
        }
    });

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.gradient}></div>
                <div className={s.inner}>
                    <SectionCaption>
                        {HumanitarianAid.main}
                    </SectionCaption>
                    <div className={s.blocks}>
                        <div className={s.infoSide}>
                            <p>{HumanitarianAid.fillTheForm}</p>
                            <a href="https://docs.google.com/document/d/15VglwvQL6Xn1fCCRMNMvp6wfashimn0D/edit" target="_blank">{HumanitarianAid.listOfNeeds}</a>
                        </div>
                        <form
                            className={s.formSide}
                            onSubmit={formik.handleSubmit}
                        // onSubmit={async e => {
                        //     e.preventDefault();
                        //     await AdminService.AddOffer(userForm);
                        // }}
                        >
                            <div className={s.inputs}>
                                <div className={s.inputWrapper}>
                                    <input
                                        name="name"
                                        type="text"
                                        value={formik.values.name}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        placeholder={HumanitarianAid.form.name}
                                        className={cn(s.input, {[s.inputError]: formik.touched.name && formik.errors.name})} />
                                    {formik.touched.name && formik.errors.name && <span className={s.validationError}>{formik.errors.name}</span>}
                                </div>
                                <div className={s.inputWrapper}>
                                    <input
                                        name="phone"
                                        type="text"
                                        value={formik.values.phone}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        placeholder={HumanitarianAid.form.phone}
                                        className={cn(s.input, {[s.inputError]: formik.touched.phone && formik.errors.phone})} />
                                    {formik.touched.phone && formik.errors.phone && <span className={s.validationError}>{formik.errors.phone}</span>}
                                </div>
                                <div className={s.inputWrapper}>
                                    <input
                                        name="email"
                                        type="text"
                                        value={formik.values.email}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        placeholder={HumanitarianAid.form.email}
                                        className={cn(s.input, {[s.inputError]: formik.touched.email && formik.errors.email})} />
                                    {formik.touched.email && formik.errors.email && <span className={s.validationError}>{formik.errors.email}</span>}
                                </div>
                            </div>
                            <div className={s.textareaWrapper}>
                                <textarea
                                    name="offer"
                                    value={formik.values.offer}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    placeholder={HumanitarianAid.form.whatYouCanProvide}
                                    className={cn(s.textarea, {[s.textareaError]: formik.touched.offer && formik.errors.offer})}>
                                </textarea>
                                {formik.touched.offer && formik.errors.offer && <span className={s.validationError}>{formik.errors.offer}</span>}
                            </div>
                            <RoundedButton className={s.submit}>
                                <button type='submit'>{HumanitarianAid.form.sendButton}</button>
                            </RoundedButton>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HumanitarianAid;