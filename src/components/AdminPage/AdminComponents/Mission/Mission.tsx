import {FC, useContext} from 'react';
import {TranslationTextContext} from "@/pages/admin";
import Label from "@/components/AdminPage/AdminComponents/AdminUI/Label/Label";

const Mission: FC = () => {
    const context = useContext(TranslationTextContext);

    return (
        <>
            {
                context !== null &&
                <Label
                    title={'Mission'}
                    type={'textarea'} maxLength={500}
                    state={context.StateTranslate}
                    path={[ context.language, 'AboutUs', 'mission__text' ]}
                    setState={context.setTranslate}
                />
            }
        </>
    );
};

export default Mission;
