"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { type JSONContent } from "@tiptap/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { UploadDropzone } from "@/app/lib/uploadthing";
import { SellProduct, State } from "@/app/actions";
import { SelectCategory } from "../components/SelectCategory";
import { TipTapEditor } from "../components/Editor";
import { Submitbutton } from "../components/SubmitButtons";
import { Button } from "@/components/ui/button";
import { SellForm } from "../components/form/SellForm";

export default function SellRoute() {
    const initalState: State = { message: "", status: undefined };
    const [state, formAction] = useFormState(SellProduct, initalState);
    const [json, setJson] = useState<null | JSONContent>(null);
    const [images, setImages] = useState<null | string[]>(null);
    const [productFile, SetProductFile] = useState<null | string>(null);

    useEffect(() => {
        if (state.status === "success") {
            toast.success(state.message);
        } else if (state.status === "error") {
            toast.error(state.message);
        }
    }, [state]);
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8">
            <SellForm />
        </section>
    )
}