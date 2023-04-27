import {FC, useContext} from 'react';
import Label from "@/components/AdminPage/AdminComponents/AdminUI/Label/Label";
import {TranslationTextContext} from "@/pages/admin";

const MainScreen: FC = () => {

    const context = useContext(TranslationTextContext);

    return (
        <>
            {
                context !== null &&
                <>
                    <Label
                        title={'Main text'} type={'textarea'} maxLength={1000}
                        state={context.StateTranslate} path={[ context.language, 'MainText', 'main']} setState={context.setTranslate}
                    />
                    <Label
                        title={'Button text'} type={'textarea'} maxLength={40} height={170}
                        state={context.StateTranslate} path={[ context.language, 'MainText', 'button']} setState={context.setTranslate}
                    />
                </>
            }
        </>
    );
};

export default MainScreen;
