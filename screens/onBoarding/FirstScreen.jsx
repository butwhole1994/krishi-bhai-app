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
import {Controller, useForm} from "react-hook-form"; // 폼 상태 관리와 컨트롤러를 위한 훅 임포트
import {useNavigation} from "@react-navigation/native"; // 네비게이션 훅 임포트

export default function FirstScreen() {
    const navigation = useNavigation(); // 네비게이션 객체 생성

    // useForm 훅을 통해 폼 상태 관리 객체(control 등)를 생성
    const {control, handleSubmit, formState: {errors}} = useForm();

    // 폼 제출 시 호출될 콜백 함수
    const onSubmit = (data) => {
        console.log("Form Data:", data); // 폼 데이터 콘솔 출력
        navigation.navigate('2nd');   // 제출 후 '2nd' 화면으로 네비게이트
    };

    return (
        <Box>
            {/* SKIP BUTTON */}
            <Button
                className="rounded-none"
                onPress={() => {
                    navigation.navigate('2nd'); // SKIP 버튼 클릭 시 '2nd' 화면으로 이동
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
                {/* FARM NAME INPUT - Controller를 사용하여 폼 필드와 UI를 연결 */}
                <Controller
                    control={control} // useForm에서 생성된 control 객체 전달
                    name="farmName"   // 이 필드의 이름 지정 (최종 폼 데이터의 key)
                    rules={{required: "Farm name must be set"}} // 유효성 검사 규칙: 필수 입력
                    render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
                        // FormControl 컴포넌트로 입력 필드 및 에러 메시지 감싸기
                        <FormControl isInvalid={!!error}>
                            <FormControlLabel>
                                <FormControlLabelText>Farm Name</FormControlLabelText>
                                <Text className="text-error-600"> *</Text>
                            </FormControlLabel>
                            <Input className="min-w-[250px]" size="xl">
                                <InputField
                                    type="text"
                                    onChangeText={onChange}  // 입력값 변경 시 useForm에 등록된 onChange 호출
                                    onBlur={onBlur}          // 포커스 해제 시 onBlur 호출하여 터치 상태 업데이트
                                    value={value}            // 현재 입력값 반영
                                />
                            </Input>
                            {error && (
                                <FormControlError>
                                    <FormControlErrorIcon as={AlertCircleIcon}/>
                                    <FormControlErrorText>{error.message}</FormControlErrorText>
                                </FormControlError>
                            )}
                        </FormControl>
                    )}
                />

                <HStack space="md" className="w-full">
                    {/* FARM AREA INPUT */}
                    <Controller
                        control={control}
                        name="farmArea"
                        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
                            <FormControl style={{flex: 2}} isInvalid={!!error}>
                                <FormControlLabel>
                                    <FormControlLabelText>Farm Area</FormControlLabelText>
                                </FormControlLabel>
                                <Input size="xl">
                                    <InputField
                                        type="text"
                                        keyboardType="number-pad" // 숫자 입력 전용 키패드
                                        onChangeText={onChange}    // 값 변경 시 폼 상태 업데이트
                                        onBlur={onBlur}
                                        value={value}
                                    />
                                </Input>
                                {error && (
                                    <FormControlError>
                                        <FormControlErrorIcon as={AlertCircleIcon}/>
                                        <FormControlErrorText>{error.message}</FormControlErrorText>
                                    </FormControlError>
                                )}
                            </FormControl>
                        )}
                    />

                    {/* FARM AREA UNIT INPUT */}
                    <Controller
                        control={control}
                        name="farmAreaUnit"
                        render={({field: {onChange, value}}) => (
                            <FormControl style={{flex: 1}}>
                                <FormControlLabel>
                                    <FormControlLabelText></FormControlLabelText>
                                </FormControlLabel>
                                {/* Select 컴포넌트를 사용하여 드롭다운 메뉴 구현 */}
                                <Select
                                    onValueChange={onChange} // 선택 값 변경 시 onChange 호출
                                    selectedValue={value}    // 현재 선택된 값 반영
                                >
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
                                            {/* 선택 항목들 */}
                                            <SelectItem label="m²" value="m²"/>
                                            <SelectItem label="Ground" value="Ground"/>
                                            <SelectItem label="Bigha" value="Bigha"/>
                                            <SelectItem label="Acre" value="Acre"/>
                                            <SelectItem label="Hectare" value="Hectare"/>
                                        </SelectContent>
                                    </SelectPortal>
                                </Select>
                            </FormControl>
                        )}
                    />
                </HStack>

                {/* NEXT BUTTON - handleSubmit를 사용하여 폼 검증 후 onSubmit 호출 */}
                <Button onPress={handleSubmit(onSubmit)} action="positive">
                    <ButtonText>NEXT</ButtonText>
                </Button>
            </VStack>
            {/* ===== FORM END ===== */}
        </Box>
    );
}
