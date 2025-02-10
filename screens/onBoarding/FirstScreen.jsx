import React from 'react';
import {
    Box,
    Button,
    ButtonText,
    Center,
    FormControl,
    Heading,
    HStack,
    Input,
    InputField,
    Text,
    VStack
} from "@/components/ui";

export default function FirstScreen() {
    return (
        <Box>
            <Center className="p-3">
                <Heading size="3xl">My Farm</Heading>
            </Center>
            <FormControl className="p-4 border-outline-300">
                <VStack space="xl">
                    <VStack space="xs">
                        <HStack>
                            <Text>Farm Name</Text>
                            <Text className="text-error-600">  *</Text>
                        </HStack>
                        <Input className="min-w-[250px]">
                            <InputField type="text"/>
                        </Input>
                    </VStack>
                    <VStack space="xs">
                        <HStack>
                            <Text>Farm Area</Text>
                        </HStack>
                        <Input className="text-center">
                            <InputField type="text"/>
                        </Input>
                    </VStack>
                    <Button
                        className="ml-auto"
                        onPress={() => {
                            setShowModal(false)
                        }}
                    >
                        <ButtonText className="text-typography-0">Next</ButtonText>
                    </Button>
                </VStack>
            </FormControl>
        </Box>
    );
}