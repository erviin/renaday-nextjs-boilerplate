export const RateTypeEnum = {
    HOURLY: "HOURLY",
    WEEKLY: "WEEKLY",
    MONTHLY: "MONTHLY",
} as const;

export const RoleTypeEnum = {
    "PROJECT_OWNER": "PROJECT OWNER",
    "PROFESIONAL": "PROFESIONAL"
};

// const formatCurrencyUSD = (value: string) => {
//     // Remove non-digit characters
//     const digits = value.replace(/\D/g, "")

//     // Format as currency
//     const formatted = new Intl.NumberFormat("en-US", {
//         style: "currency",
//         currency: "USD",
//         minimumFractionDigits: 2,
//         maximumFractionDigits: 2,
//     }).format(Number(digits) / 100)

//     return formatted
// }

export const formatCurrencyIDR = (value: string) => {
    // Remove non-digit characters
    const digits = value.replace(/\D/g, "")

    // Format as Rupiah
    const formatted = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(Number(digits))

    return formatted
}
