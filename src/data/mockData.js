export const mockInspections = [
  {
    inspectionId: "INS-1001",
    productName: "AquaPure Mineral Water 1L",
    manufacturer: "AquaPure Industries Pvt Ltd",
    netQuantity: "1000 ml",
    mrp: "Rs.20",
    objectRecognition: { label: "water bottle", confidence: 0.91 },
    extractedText: "AquaPure Mineral Water Net Qty 1000ml MRP Rs.20",
    complianceStatus: "Compliant",
    violations: [],
    warnings: ["MRP text is slightly low-contrast, verify manually"]
  },
  {
    inspectionId: "INS-1002",
    productName: "Unknown Snack Pack",
    manufacturer: "",
    netQuantity: "",
    mrp: "",
    objectRecognition: { label: "packaged food item", confidence: 0.74 },
    extractedText: "Best Before 12M from Mfg",
    complianceStatus: "Non-Compliant",
    violations: ["Manufacturer name/address missing", "MRP not detected", "Net quantity not detected"],
    warnings: []
  }
];
