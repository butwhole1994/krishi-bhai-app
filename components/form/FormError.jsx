import {
    FormControlError,
    FormControlErrorIcon,
    FormControlErrorText,
    AlertCircleIcon
} from "@/components/ui";

export default function FormError({ message }) {
    if (!message) return null;

    return (
        <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>{message}</FormControlErrorText>
        </FormControlError>
    );
}
