# EveCo_Friendly


Many brands generate increase profits and build their prestige around marketing which claims they are ECO-friendly.
EveCo_Friendly is an devery hackathon app that will use the devery protocol to give consumers more transparency into the status
of individual brands and their product portfolio's overall ECO friendlyness. Also if time permits it will seek to explore using traceability powered by devery to enable both consumers and brands to be held accountable for their recycling.


# Tracing Toxicity
Each product will have a specific ECO Friendlyness rating which will coorelate to the level of which the product can be recycled/re-used
>Toxicity Ratings **X**->Low Toxicity **Y**->Medium Toxicity **Z**->High Toxicity **S**->NonToxic (Toxicity of Recycle Process)
>WasteType Ratings **R**->Recyclable **B**-->Biodegradable **N**->NonBiodegradable
* **R000S**->0% recycle(NonTox) **B100X**->100% Degrade(LowTox) **N000S**->0% NonDegrade(NonTox) **R000SB100XN000S**
* **R020Z**->20% recycle(HiTox) **B040Y**->40% Degrade(MedTox) **N040X**->40% NonDegrade(LowTox) **R020ZB040N040X**
* **R040Z**->40% recycle(HiTox) **B055Z**->55% Degrade(HiTox) **N005Z**->5% NonDegrade(HiTox) **R040ZB055ZN005Z**
* **R060Y**->60% recycle(MedTox) **B010Z**->10% Degrade(HiTox) **N030X**->30% NonDegrade(LowTox) **R060YB010ZN030X**
 
 # Tracing Recycling 
Each product will be transferred from brand to supplychain/consumer and then to a recycling plant that meets the criteria of the ECO Friendlyness rating.

A table of addresses will be stored in a decentralized DB (If time permits) 

| Recycling Address | Rated Toxicity Type | 
|:-------------:|:-------------:|
| Hashed Address 1 | S |
| Hashed Address 2 | X |
| Hashed Address 3 | Y |
| Hashed Address 4 | Z |

 Recycling Addresses will be given permission to accept ownership only of products that they have the ability to properly process.
 * Hashed Address 1 can recieve/recycle products **R000SB100XN000S**
 * Hashed Address 2 can recieve/recycle products **NonValid/NaN**
 * Hashed Address 3 can recieve/recycle products **R060YB010ZN030X**
 * Hashed Address 4 can recieve/recycle products **R020ZB040N040X** && **R040ZB055ZN005Z**

# Calculating EveCo_Friendlyness

