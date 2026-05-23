import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartOverview } from "@/components/chart/";
import { DollarSign } from "lucide-react";
import { Sales } from "@/components/sales";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 font-semibold mb-2 select-none">
                Total Vendas
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4" />
            </div>

            <CardDescription>
              Total de vendas realizadas no período selecionado.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold text-gray-900">R$ 15.000,00</p>
            <p className="text-sm text-gray-500">Comparado ao mês anterior: +10%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600 font-semibold mb-2 select-none">
                Total Vendas
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>
              Total de vendas realizadas no período selecionado.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold text-gray-900">R$ 15.000,00</p>
            <p className="text-sm text-gray-500">Comparado ao mês anterior: +10%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 font-semibold mb-2 select-none">
                Total Vendas
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4" />
            </div>

            <CardDescription>
              Total de vendas realizadas no período selecionado.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold text-gray-900">R$ 15.000,00</p>
            <p className="text-sm text-gray-500">Comparado ao mês anterior: +10%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600 font-semibold mb-2 select-none">
                Total Vendas
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>
              Total de vendas realizadas no período selecionado.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold text-gray-900">R$ 15.000,00</p>
            <p className="text-sm text-gray-500">Comparado ao mês anterior: +10%</p>
          </CardContent>
        </Card>
      </section>
      
      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <ChartOverview/>
        <Sales/>
      </section> 
        
    </main>
  );
}
