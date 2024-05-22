import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
    return (
        <section id="about">
            <BentoGrid className="w-full py-20">
                {gridItems.map((item) => (
                    <BentoGridItem
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        className={item.className}
                        imgClassName={item.imgClassName}
                        titleClassName={item.titleClassName}
                        img={item.img}
                        spareImg={item.spareImg}
                    />
                ))}
            </BentoGrid>
        </section>
    );
};

export default Grid;