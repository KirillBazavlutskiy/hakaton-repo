import {FC, useContext} from 'react';
import {TranslationTextContext} from "@/pages/admin";
import Label from "@/components/AdminPage/AdminComponents/AdminUI/Label/Label";

const AboutUs: FC = () => {

    const context = useContext(TranslationTextContext);

    return (
        <>
            {
                context !== null &&
                    <Label
                        title={'About Us'}
                        type={'textarea'} maxLength={1500}
                        state={context.StateTranslate}
                        path={[ context.language, 'AboutUs', 'about__text' ]}
                        setState={context.setTranslate}
                    />
            }
        </>
    );
};

export default AboutUs;
