import Head from "next/head";
import { z } from "zod";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

const PersonSchema = z.object({
  firstname: z.string().min(2, "Firstname must contain at least 2 characters"),
  lastname: z.string().min(2, "Lastname must contain at least 2 characters"),
  nickname: z
    .union([
      z.string().min(2, "Lastname must contain at least 2 characters"),
      z.literal(""),
    ])
    .optional(),
});

type TPersonSchema = z.infer<typeof PersonSchema>;

const data: TPersonSchema[] = [
  { firstname: "John", lastname: "Doe" },
  { firstname: "Jane", lastname: "Doe", nickname: "Jane Doe" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-start justify-center gap-12 px-4 py-10">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            react-table-list-hook-
            <span className="text-[hsl(280,100%,70%)]">form</span>
          </h1>
          <div className="text-white">
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </>
  );
}
