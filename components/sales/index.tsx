import { CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Sales() {
    return (
        <Card className="flex-1">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">Vendas</CardTitle>
                    <CircleDollarSign className="ml-auto w-4 h-4" />
                </div>
            </CardHeader>
            <CardContent>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="/avatar_closed.png" alt="Avatar" />
                        <AvatarFallback>CC</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm font-medium text-gray-900">Caio Sampaio</p>
                        <p className="text-sm text-gray-500">R$ 1.200,00</p>
                    </div>
                </article>
            </CardContent>
        </Card>
    );
}