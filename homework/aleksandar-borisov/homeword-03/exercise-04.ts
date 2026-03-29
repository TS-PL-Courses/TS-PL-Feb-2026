const phoneNumber: string[] = ['0376829209', '04239982009', '0536829299'];

for (const element of phoneNumber) {
  console.log(`Original number is: ${element}\t-> New number is: ${element.replace('0', '+359')}`);
}
