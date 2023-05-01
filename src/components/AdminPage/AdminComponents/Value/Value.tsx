import {FC, useContext} from 'react';
import {TranslationTextContext} from "@/pages/admin";
import Label from "@/components/AdminPage/AdminComponents/AdminUI/Label/Label";

const Value = () => {
    const context = useContext(TranslationTextContext);

    return (
        <>
            {
                context !== null &&
                <Label
                    title={'About Us'}
                    type={'textarea'} maxLength={500}
                    state={context.StateTranslate}
                    path={[ context.language, 'AboutUs', 'value__text' ]}
                    setState={context.setTranslate}
                />
            }
        </>
    );
};

export default Value;
