import {Controller} from "react-hook-form";
import {
    FormControl,
    FormControlLabel,
    FormControlLabelText,
    Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper,
    SelectIcon,
    SelectInput, SelectItem, SelectPortal,
    SelectTrigger
} from "@/components/ui";
import FormError from "@/components/form/FormError";

export default function FormSelectInput({
                                            control, name, label, rules, options = [], defaultValue
                                        }) {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({field: {onChange, value}, fieldState: {error}}) => (
                <FormControl isInvalid={!!error}>
                    {label && (
                        <FormControlLabel>
                            <FormControlLabelText>{label}</FormControlLabelText>
                        </FormControlLabel>
                    )}
                    <Select onValueChange={onChange} selectedValue={value} defaultValue={defaultValue}>
                        <SelectTrigger size="xl" className="flex-row justify-between items-center">
                            <SelectInput placeholder="Select..."/>
                            <SelectIcon as={ChevronDownIcon} className="mr-3"/>
                        </SelectTrigger>
                        <SelectPortal>
                            <SelectBackdrop/>
                            <SelectContent>
                                <SelectDragIndicatorWrapper>
                                    <SelectDragIndicator/>
                                </SelectDragIndicatorWrapper>
                                {options.map((item) => (
                                    <SelectItem
                                        key={item.value}
                                        label={item.label}
                                        value={item.value}
                                    />
                                ))}
                            </SelectContent>
                        </SelectPortal>
                    </Select>
                    <FormError message={error?.message}/>
                </FormControl>
            )}
        />
    );
}
