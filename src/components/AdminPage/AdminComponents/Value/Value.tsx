import {FC, useContext} from 'react';
import {TranslationTextContext} from "@/pages/admin";
import Label from "@/components/AdminPage/AdminComponents/AdminUI/Label/Label";
import Button from "@/components/AdminPage/AdminComponents/AdminUI/Button/Button";
import LocalisationService from "@/services/LocalisationService";

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
            <div className='flex justify-end mt-[20px]'>
                <Button color={'blue'} size={'small'} onClick={() => {
                    if (context !== null) LocalisationService.SetLocalisation(context?.StateTranslate);
                }}>Change Text</Button>
            </div>
        </>
    );
};

export default Value;
