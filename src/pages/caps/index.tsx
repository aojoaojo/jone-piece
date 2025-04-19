import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


interface Arcos {
    eastBlue: number;
    alabasta: number;
    skypiea: number;
    waterSeven: number;
    thrillerBark: number;
    marineFord: number;
    fishManIsland: number;
    dressrosa: number;
    wholeCake: number;
    wano: number;
    egghead: number;
    elbaf: number;
}

export default function Cap() {
    const ultimo = 1145;
    const arcos: Arcos = {
        eastBlue: 100,
        alabasta: 217 - 100,
        skypiea: 302 - 217,
        waterSeven: 441 - 302,
        thrillerBark: 489 - 441,
        marineFord: 597 - 489,
        fishManIsland: 653 - 597,
        dressrosa: 801 - 653,
        wholeCake: 908 - 801,
        wano: 1057 - 908,
        egghead: 1130 - 1057,
        elbaf: ultimo - 1130,
    };
    return (
        <>
                <h1 className="titleCaps">Bem-vindo(a) à sua coleção de mangás de One Piece!</h1>

                <div className="d-flex text-center justify-content-center p-3 flex-wrap m-lg-5">
                    {Object.entries(arcos).map(([arcoName, arcoValue], index) => {
                        const startChapter = Object.values(arcos)
                            .slice(0, index)
                            .reduce((sum, value) => sum + value, 0) + 1;
                        return (
                            <Accordion key={index} className="arco-container" type="single" collapsible>
                                <AccordionItem value={`item-${index}`}>
                                    <AccordionTrigger style={{ all: "unset", cursor: "pointer" }}>
                                        {arcoName.charAt(0).toUpperCase() + arcoName.slice(1)}
                                    </AccordionTrigger>
                                    <AccordionContent className="d-flex">
                                        <div id={Object.keys(arcos)[index]} className="arco p-3">
                                            {
                                                Array.from({ length: arcoValue }, (_, idx) => (
                                                    <div key={idx}>
                                                        <a href={`/caps/cap_${startChapter + idx}`} target="_blank" >Capítulo {startChapter + idx}</a>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        );
                    })}
                </div>
        </>
    );
}