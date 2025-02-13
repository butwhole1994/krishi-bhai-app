import React from 'react';
import {
    AlertCircleIcon,
    Box,
    Button,
    ButtonIcon,
    ButtonText,
    Center,
    ChevronDownIcon,
    ChevronsRightIcon,
    FormControl,
    FormControlError,
    FormControlErrorIcon,
    FormControlErrorText,
    FormControlLabel,
    FormControlLabelText,
    Heading,
    HStack,
    Input,
    InputField,
    Select,
    SelectBackdrop,
    SelectContent,
    SelectDragIndicator,
    SelectDragIndicatorWrapper,
    SelectIcon,
    SelectInput,
    SelectItem,
    SelectPortal,
    SelectTrigger,
    Text,
    VStack
} from "@/components/ui";
import {useForm} from "react-hook-form";
import {useNavigation} from "@react-navigation/native";


const myFarmForm = () => {
    const {control, handleSubmit, formState: {error}} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
};

export default function FirstScreen() {
    const navigation = useNavigation(); // navigation 객체 가져오기

    return (
        <Box>
            {/* SKIP BUTTON */}
            <Button
                className="rounded-none"
                onPress={() => {
                    navigation.navigate('2nd');
                }}
            >
                <ButtonText>SKIP</ButtonText>
                <ButtonIcon as={ChevronsRightIcon}/>
            </Button>

            {/* FORM HEADER */}
            <Center className="p-3">
                <Heading size="3xl">Let me know your farm!</Heading>
            </Center>

            {/* ===== FORM START ===== */}
            <VStack className="p-4 border-outline-300" space="xl">

                {/* FARM NAME INPUT */}
                <FormControl>
                    <FormControlLabel>
                        <FormControlLabelText>Farm Name</FormControlLabelText>
                        <Text className="text-error-600"> *</Text>
                    </FormControlLabel>
                    <Input className="min-w-[250px]" size="xl">
                        <InputField type="text"/>
                    </Input>
                    <FormControlError>
                        <FormControlErrorIcon as={AlertCircleIcon}/>
                        <FormControlErrorText>Farm name must be set</FormControlErrorText>
                    </FormControlError>
                </FormControl>
                <HStack space="md" className="w-full">

                    {/* FARM AREA INPUT */}
                    <FormControl style={{flex: 2}}>
                        <FormControlLabel>
                            <FormControlLabelText>Farm Area</FormControlLabelText>
                        </FormControlLabel>
                        <Input size="xl">
                            <InputField type="text" keyboardType="number-pad"/>
                        </Input>
                    </FormControl>

                    {/* FARM AREA UNIT INPUT */}
                    <FormControl style={{flex: 1}}>
                        <FormControlLabel>
                            <FormControlLabelText></FormControlLabelText>
                        </FormControlLabel>
                        <Select>
                            <SelectTrigger size="xl" className="flex-row justify-between items-center">
                                <SelectInput placeholder="Unit"/>
                                <SelectIcon as={ChevronDownIcon} className="mr-3"/>
                            </SelectTrigger>
                            <SelectPortal>
                                <SelectBackdrop/>
                                <SelectContent>
                                    <SelectDragIndicatorWrapper>
                                        <SelectDragIndicator/>
                                    </SelectDragIndicatorWrapper>
                                    <SelectItem label="m²" value="m²"/>
                                    <SelectItem label="Ground" value="Ground"/>
                                    <SelectItem label="Bigha" value="Bigha"/>
                                    <SelectItem label="Acre" value="Acre"/>
                                    <SelectItem label="Hectare" value="Hectare"/>
                                </SelectContent>
                            </SelectPortal>
                        </Select>
                    </FormControl>
                </HStack>

                <Button
                    onPress={() => {
                    }}
                    action="positive"
                >
                    <ButtonText>NEXT</ButtonText>
                </Button>
            </VStack>
            {/* ===== FORM END ===== */}
        </Box>
    );
}