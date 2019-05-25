# EveCo_Friendly


Many brands generate increased profits and build their prestige around marketing which claims they are ECO-friendly.
EveCo_Friendly is a Devery app that will give consumers more transparency into the status of individual brands and their product portfolio's overall ECO friendlyness. The app will use the owner permissions and deveryjs toolset to obtain traceability enabling both consumers and brands to be held accountable for their recycling.


# Tracing Toxicity
Each product will have a specific ECO Friendlyness rating which will coorelate to the level of which the product can be recycled/re-used
>Toxicity Ratings: **X**->Low Toxicity **Y**->Medium Toxicity **Z**->High Toxicity **S**->NonToxic (Recycle Process Toxicity)

>WasteType Ratings: **R**->Recyclable **B**-->Biodegradable **N**->NonBiodegradable

* **R000S**->0% recycle(NonTox) **B100X**->100% Degrade(LowTox) **N000S**->0% NonDegrade(NonTox) **R000SB100XN000S**
* **R020Z**->20% recycle(HiTox) **B040Y**->40% Degrade(MedTox) **N040X**->40% NonDegrade(LowTox) **R020ZB040YN040X**
* **R040Z**->40% recycle(HiTox) **B055Z**->55% Degrade(HiTox) **N005Z**->5% NonDegrade(HiTox) **R040ZB055ZN005Z**
* **R060Y**->60% recycle(MedTox) **B010Z**->10% Degrade(HiTox) **N030X**->30% NonDegrade(LowTox) **R060YB010ZN030X**
 
 # Tracing Recycling 
Each product will be transferred from brand to supplychain/consumer and then to a recycling plant that meets the criteria of the ECO Friendlyness rating.

A table of Recycling facility addresses will be stored in a decentralized DB  

| Recycling Address | Rated Toxicity Type | 
| -------------:|:-------------:|
| RecAddr1 | S |
| RecAddr2 | X |
| RecAddrr3 | Y |
| RecAddr4 | Z |

A table of Consumer addresses will be stored in a decentralized DB 

| Consumer Address | Products Owned | 
| -------------:| -------------:|
| ConsAddr1 | {'R000SB100XN000S'} |
| ConsAddr2 | {'R060YB010ZN030X', 'R020ZB040YN040X'} |
| ConsAddr3 | {'NaN'} |
| ConsAddr4 | {'R040ZB055ZN005Z'} |

 Recycling Addresses will be given permission to accept ownership only of products that they have the ability to properly process.
 * RecAddr1 can recieve/recycle products from ConsAddr1{1} productInfo = **R000SB100XN000S**
 * RecAddr2 can recieve/recycle products from **NonValid/NaN**
 * RecAddr3 can recieve/recycle products from ConsAddr2{1} productInfo= **R060YB010ZN030X**
 * RecAddr4 can recieve/recycle products from ConsAddr2{2} && ConsAddr4{1} productInfo= **R020ZB040YN040X && R040ZB055ZN005Z**

# Calculating EveCo_Friendlyness

Using the rate that both consumers and brands successfully hand off ownership of their products to the recycling addresses rough or percise metrics of ECO friendlyness can be achieved
