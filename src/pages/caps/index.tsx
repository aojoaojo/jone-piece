import "../../styles/globals.css";

interface Arcos {
    eastBlue: number;
    alabasta: number;
    skypiea: number;
    waterSeven: number;
    thrillerBark: number;
    marineFord: number;
    ilhaDosHomensPeixe: number;
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
        ilhaDosHomensPeixe: 653 - 597,
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
                <div className="arco-container">
                    <h2>
                        East Blue
                    </h2>
                    <div id="eastblue" className="arco">
                        {
                            Array.from({ length: arcos.eastBlue }, (_, index) => (
                                <div key={index}>
                                    <a href={`/caps/cap_${index + 1}`}>Capítulo {index + 1}</a>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="arco-container">
                    <h2>
                        Alabasta
                    </h2>
                    <div id="alabasta" className="arco">
                        {
                            Array.from({ length: arcos.alabasta }, (_, index) => (
                                <div key={index}>
                                    <a href={`/caps/cap_${index + arcos.eastBlue + 1}`}>Capítulo {index + arcos.eastBlue + 1}</a>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="arco-container">
                    <h2>
                        Skypiea
                    </h2>
                    <div id="skypiea" className="arco">
                        {
                            Array.from({ length: arcos.skypiea }, (_, index) => (
                                <div key={index}>
                                    <a href={`/caps/cap_${index + arcos.eastBlue + arcos.alabasta + 1}`}>Capítulo {index + arcos.eastBlue + arcos.alabasta + 1}</a>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="arco-container">
                    <h2>
                        Water Seven
                    </h2>
                    <div id="waterseven" className="arco">
                        {
                            Array.from({ length: arcos.waterSeven }, (_, index) => (
                                <div key={index}>
                                    <a href={`/caps/cap_${index + arcos.eastBlue + arcos.alabasta + arcos.skypiea + 1}`}>Capítulo {index + arcos.eastBlue + arcos.alabasta + arcos.skypiea + 1}</a>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="arco-container">
                    <h2>
                        Thriller Bark
                    </h2>
                    <div id="thrillerBark" className="arco">
                        {
                            Array.from({ length: arcos.thrillerBark }, (_, index) => (
                                <div key={index}>
                                    <a href={`/caps/cap_${index + arcos.eastBlue + arcos.alabasta + arcos.skypiea + arcos.waterSeven + 1}`}>Capítulo {index + arcos.eastBlue + arcos.alabasta + arcos.skypiea + arcos.waterSeven + 1}</a>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="arco-container">
                    <h2>
                        Marine Ford
                    </h2>
                    <div id="marineFord" className="arco">
                        {
                            Array.from({ length: arcos.marineFord }, (_, index) => (
                                <div key={index}>
                                    <a href={`/caps/cap_${index + arcos.eastBlue + arcos.alabasta + arcos.skypiea + arcos.waterSeven + arcos.thrillerBark + 1}`}>Capítulo {index + arcos.eastBlue + arcos.alabasta + arcos.skypiea + arcos.waterSeven + arcos.thrillerBark + 1}</a>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="arco-container">
                    <h2>
                        Ilha dos Homens Peixe
                    </h2>
                    <div id="fishman" className="arco">
                        {
                            Array.from({ length: arcos.ilhaDosHomensPeixe }, (_, index) => (
                                <div key={index}>
                                    <a href={`/caps/cap_${index + arcos.eastBlue + arcos.alabasta + arcos.skypiea + arcos.waterSeven + arcos.thrillerBark + arcos.marineFord + 1}`}>Capítulo {index + arcos.eastBlue + arcos.alabasta + arcos.skypiea + arcos.waterSeven + arcos.thrillerBark + arcos.marineFord + 1}</a>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="arco-container">
                    <h2>
                        Dressrosa
                    </h2>
                    <div id="dressrosa" className="arco">
                        {
                            Array.from({ length: arcos.dressrosa }, (_, index) => (
                                <div key={index}>
                                    <a href={`/caps/cap_${index + arcos.eastBlue + arcos.alabasta + arcos.skypiea + arcos.waterSeven + arcos.thrillerBark + arcos.marineFord + arcos.ilhaDosHomensPeixe + 1}`}>Capítulo {index + arcos.eastBlue + arcos.alabasta + arcos.skypiea + arcos.waterSeven + arcos.thrillerBark + arcos.marineFord + arcos.ilhaDosHomensPeixe + 1}</a>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="arco-container">
                    <h2>
                        Whole Cake
                    </h2>
                    <div id="wholeCake" className="arco">
                        {
                            Array.from({ length: arcos.wholeCake }, (_, index) => (
                                <div key={index}>
                                    <a href={`/caps/cap_${index + arcos.eastBlue + arcos.alabasta + arcos.skypiea + arcos.waterSeven + arcos.thrillerBark + arcos.marineFord + arcos.ilhaDosHomensPeixe + arcos.dressrosa + 1}`}>Capítulo {index + arcos.eastBlue + arcos.alabasta + arcos.skypiea + arcos.waterSeven + arcos.thrillerBark + arcos.marineFord + arcos.ilhaDosHomensPeixe + arcos.dressrosa + 1}</a>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="arco-container">
                    <h2>
                        Wano
                    </h2>
                    <div id="wano" className="arco">
                        {
                            Array.from({ length: arcos.wano }, (_, index) => (
                                <div key={index}>
                                    <a href={`/caps/cap_${index + arcos.eastBlue + arcos.alabasta + arcos.skypiea + arcos.waterSeven + arcos.thrillerBark + arcos.marineFord + arcos.ilhaDosHomensPeixe + arcos.dressrosa + arcos.wholeCake + 1}`}>Capítulo {index + arcos.eastBlue + arcos.alabasta + arcos.skypiea + arcos.waterSeven + arcos.thrillerBark + arcos.marineFord + arcos.ilhaDosHomensPeixe + arcos.dressrosa + arcos.wholeCake + 1}</a>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="arco-container">
                    <h2>
                        Egghead
                    </h2>
                    <div id="egghead" className="arco">
                        {
                            Array.from({ length: arcos.egghead }, (_, index) => (
                                <div key={index}>
                                    <a href={`/caps/cap_${index + arcos.eastBlue + arcos.alabasta + arcos.skypiea + arcos.waterSeven + arcos.thrillerBark + arcos.marineFord + arcos.ilhaDosHomensPeixe + arcos.dressrosa + arcos.wholeCake + arcos.wano + 1}`}>Capítulo {index + arcos.eastBlue + arcos.alabasta + arcos.skypiea + arcos.waterSeven + arcos.thrillerBark + arcos.marineFord + arcos.ilhaDosHomensPeixe + arcos.dressrosa + arcos.wholeCake + arcos.wano + 1}</a>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="arco-container">
                    <h2>
                        Elbaf
                    </h2>
                    <div id="elbaf" className="arco">
                        {
                            Array.from({ length: arcos.elbaf }, (_, index) => (
                                <div key={index}>
                                    <a href={`/caps/cap_${index + arcos.eastBlue + arcos.alabasta + arcos.skypiea + arcos.waterSeven + arcos.thrillerBark + arcos.marineFord + arcos.ilhaDosHomensPeixe + arcos.dressrosa + arcos.wholeCake + arcos.wano + arcos.egghead + 1}`}>Capítulo {index + arcos.eastBlue + arcos.alabasta + arcos.skypiea + arcos.waterSeven + arcos.thrillerBark + arcos.marineFord + arcos.ilhaDosHomensPeixe + arcos.dressrosa + arcos.wholeCake + arcos.wano + arcos.egghead + 1}</a>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}