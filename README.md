# EveCo_Friendly


Many brands generate increased profits and build their prestige around marketing which claims they are ECO-friendly.
EveCo_Friendly is a Devery app that will give consumers more transparency into the status of individual brands and their product portfolio's overall ECO friendlyness. The app will use the owner permissions and deveryjs toolset to obtain traceability enabling both consumers and brands to be held accountable for their recycling.


## Tracing Toxicity
Each product will have a specific ECO Friendlyness Rating which will coorelate to the level of which the product can be recycled/re-used
and also gives proportions that are or are-not biodegradeable of the remaining unrecycled parts in the waste process.  

| WasteType | Rating Symbol | Toxicity | Rating Symbol | 
| -------------:|:-------------:| -------------:|:-------------:|
| Recyclable | **R** | Non-Toxic | **S** | 
| Biodegradable | **B** | Low-Toxicity | **X** | 
| NonBiodegradable | **N** | Medium-Toxicity | **Y** | 
| | | High-Toxicity | **Z** | 

#### Generating EveCO-InfoLabels
* **R000S**->0% recycle(NonTox) **B100X**->100% Degrade(LowTox) **N000S**->0% NonDegrade(NonTox) **R000SB100XN000S**
* **R020Z**->20% recycle(HiTox) **B040Y**->40% Degrade(MedTox) **N040X**->40% NonDegrade(LowTox) **R020ZB040YN040X**
* **R040Z**->40% recycle(HiTox) **B055Z**->55% Degrade(HiTox) **N005Z**->5% NonDegrade(HiTox) **R040ZB055ZN005Z**
* **R060Y**->60% recycle(MedTox) **B010Z**->10% Degrade(HiTox) **N030X**->30% NonDegrade(LowTox) **R060YB010ZN030X**
 
## Tracing Recycling 
Each product will be transferred from brand to supplychain/consumer and then to a recycling plant that meets the criteria of the ECO Friendlyness rating.

A table of Recycling facility addresses will be stored in a decentralized DB  

| Recycling Address | Recyclable Toxicity Type | 
| -------------:|:-------------:|
| RecyclingAddr1 | S |
| RecyclingAddr2 | X |
| RecyclingAddr3 | Y |
| RecyclingAddr4 | Z |

The products each address owns (including Recycling Addresses) can be redeemed by the getProductsByOwner() function (DeveryERC721)

| Consumer Address | Products Owned (productInfo)| 
| -------------:| -------------:|
| ConsumerAddr1 | {'R000SB100XN000S'} |
| ConsumerAddr2 | {'R060YB010ZN030X', 'R020ZB040YN040X'} |
| ConsumerAddr3 | {'NaN'} |
| ConsumerAddr4 | {'R040ZB055ZN005Z'} |

 Recycling Addresses will be given permission to accept ownership only of products that they have the ability to properly process.
 
| Recycling Address Reciever | Consumer Address Sender | Products Recycled |   
| -------------:| -------------:| -------------:|
| RecyclingAddr1 | ConsumerAddr1(1) | {'R000SB100XN000S'} |
| RecyclingAddr2 | NaN | No Recyclable Toxicity Type X |
| RecyclingAddr3 | ConsumerAddr2(1) | {'R060YB010ZN030X'} |
| RecyclingAddr1 | ConsumerAddr2(2), ConsumerAddr4(1) | {'R020ZB040YN040X', 'R040ZB055ZN005Z'} |


## Calculating EveCo_Friendlyness

Using the rate that both consumers and brands successfully hand off ownership of their products to the recycling addresses rough or percise metrics of ECO friendlyness can be achieved
