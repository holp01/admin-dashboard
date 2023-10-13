import React from 'react';
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    Typography
} from '@material-tailwind/react';

function ErrorModal({ isOpen, onClose, errorMessage }) {
    return (
        <Dialog open={isOpen} handler={onClose} className="bg-transparent shadow-none">
            <Card className="mx-auto w-full max-w-[30rem]">
                <CardHeader
                    variant="gradient"
                    color="red" // Using red for errors
                    className="mb-4 grid h-28 place-items-center"
                >
                    <Typography variant="h3" color="white">
                        Error
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4 text-center">
                    <Typography variant="h6" color="gray">
                        {errorMessage}
                    </Typography>
                </CardBody>
                <div className="flex justify-center pb-4">
                    <Button
                        variant="gradient"
                        color="red"
                        onClick={onClose}
                    >
                        Close
                    </Button>
                </div>
            </Card>
        </Dialog>
    );
}

export default ErrorModal;
