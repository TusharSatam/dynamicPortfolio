import { heroData } from "../../utils/portfolioData/heroData";

export async function GET(){
    return Response.json(heroData)
}