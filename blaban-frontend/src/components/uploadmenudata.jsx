import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const UploadMenuData = () => {
    const menuItems = [
        {
            name_en: "Remontada",
            description_en: "Qashtota with rice pudding, panna cotta, and fresh mango.",
            name_ar: "ريمونتادا",
            description_ar: "قشطوطة مع بودنغ الأرز، باناكوتا، وقطع مانجو فريش.",
            price: 30,
            image: "https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638827446876869522?width=172&height=172",
            category: "desserts",
        },
        {
            name_en: "Kabsa Blaban Medium",
            description_en: "Fudge cake, kunafa mix with pistachio sauce, pistachio mousse.",
            name_ar: "كبسة بلبن وسط",
            description_ar: "كيك فادج، خليط كنافة مع صوص البيستاشيو، موس.",
            price: 65,
            image: "https://images.deliveryhero.io/image/talabat/Menuitems/7A5865413679D8B26308204EC7C0C412?width=172&height=172",
            category: "desserts",
        },
        {
            name_en: "Creme La De Creme",
            description_en: "French butter cake soaked in milk, topped with Italian cream and strawberries.",
            name_ar: "كريم لا دي كريم",
            description_ar: "كيك الزبدة الفرنسي منقوع بالحليب، مغطى بكريمة إيطالية وفراولة.",
            price: 38,
            image: "https://images.deliveryhero.io/image/talabat/Menuitems/WhatsApp_Image_20250620_a638860419923491367.jpeg?width=172&height=172",
            category: "desserts",
        },
        {
            name_en: "ElQa",
            description_en: "French Butter Mille Feuille with Crème Patisserie, Egyptian strawberries.",
            name_ar: "اللُّقَّة",
            description_ar: "ميل فوي الزبدة الفرنسية مع كريم باتيسري، فراولة مصرية.",
            price: 31,
            image: "https://images.deliveryhero.io/image/talabat/Menuitems/WhatsApp_Image_20250620_a638860419923491367.jpeg?width=172&height=172",
            category: "desserts",
        },
        {
            name_en: "Lazy Cake Small",
            description_en: "A rich fudgy cake bite blended with creamy milk, covered with a soft layer of chocolate.",
            name_ar: "ليزي كيك صغيرة",
            description_ar: "قطعة كيك فادج غنية ممزوجة بالحليب، مع طبقة ناعمة من الشوكولاتة.",
            price: 37,
            image: "https://images.deliveryhero.io/image/talabat/Menuitems/CABD60028D0006807EB0842683340625?width=172&height=172",
            category: "desserts",
        },
        {
            name_en: "Lazy Cake Large",
            description_en: "A rich fudgy cake bite blended with creamy milk, covered with a soft layer of chocolate.",
            name_ar: "ليزي كيك كبيرة",
            description_ar: "قطعة كيك فادج غنية ممزوجة بالحليب، مع طبقة ناعمة من الشوكولاتة.",
            price: 60,
            image: "https://images.deliveryhero.io/image/talabat/Menuitems/CABD60028D0006807EB0842683340625?width=172&height=172",
            category: "desserts",
        },
        {
            name_en: "Dabadebo London Nutella",
            description_en: "A chocolate mousse-filled bear, with a fudge cake base, covered in Nutella.",
            name_ar: "ديابديو لندن نوتيلا",
            description_ar: "دب محشو موس الشوكولاتة، بداخله كيكة فادج، ومغطى بالنوتيلا.",
            price: 10,
            image: "https://images.deliveryhero.io/image/talabat/Menuitems/WhatsApp_Image_20250620_a638860419923491367.jpeg?width=172&height=172",
            category: "desserts",
        },
        {
            name_en: "Dabadebo London Pistachio",
            description_en: "A chocolate mousse-filled bear, with a fudge cake base, covered in pistachio.",
            name_ar: "ديابديو لندن بيستاشيو",
            description_ar: "دب محشو موس الشوكولاتة، بداخله كيكة فادج، ومغطى بالبيستاشيو.",
            price: 10,
            image: "https://images.deliveryhero.io/image/talabat/Menuitems/WhatsApp_Image_20250620_a638860419923491367.jpeg?width=172&height=172",
            category: "desserts",
        },
        {
            name_en: "Dabadebo London Kinder",
            description_en: "A chocolate mousse-filled bear, with a fudge cake base, covered in kinder.",
            name_ar: "ديابديو لندن كيندر",
            description_ar: "دب محشو موس الشوكولاتة، بداخله كيكة فادج، ومغطى بالكندر.",
            price: 10,
            image: "https://images.deliveryhero.io/image/talabat/Menuitems/WhatsApp_Image_20250620_a638860419923491367.jpeg?width=172&height=172",
            category: "desserts",
        },
        {
            name_en: "Plain Rice Pudding",
            description_en: "Classic egyptian dessert made with creamy rice.",
            name_ar: "أرز بلبن سادة",
            description_ar: "حلوى مصرية كلاسيكية مصنوعة من الأرز الكريمي.",
            price: 10,
            image: "https://images.deliveryhero.io/image/talabat/Menuitems/C578E0BE97D1EFA9E2F9FC4400CAC818?width=172&height=172",
            category: "rice-pudding",
        },
        {
            name_en: "Rice Pudding Rocher",
            description_en: "Rice pudding and italian rocher chocolate.",
            name_ar: "أرز بلبن روشية",
            description_ar: "أرز بلبن وشوكليت روشية إيطالي.",
            price: 22,
            image: "https://images.deliveryhero.io/image/talabat/Menuitems/551ED995D7A712D560750F68BFF7A753?width=172&height=172",
            category: "rice-pudding",
        },
        {
            name_en: "Rice Pudding And Nuts And Nutella",
            description_en: "Creamy rice pudding layered with a mix of nuts and Nutella.",
            name_ar: "أرز بلبن بالمكسرات والنوتيلا",
            description_ar: "أرز بلبن كريمي مع مزيج من المكسرات وصوص النوتيلا.",
            price: 24,
            image: "https://images.deliveryhero.io/image/talabat/Menuitems/439B0D27BF626C2FD66451245E3D7963?width=172&height=172",
            category: "rice-pudding",
        },
    ];

    const uploadMenuItems = async () => {
        const menuCollection = collection(db, "menuItems");
        try {
            for (const item of menuItems) {
                await addDoc(menuCollection, item);
            }
            alert("B.Laban menu items uploaded successfully!");
        } catch (error) {
            console.error("Error uploading:", error);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Upload B.Laban Menu Items</h1>
            <button
                onClick={uploadMenuItems}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
                Upload Menu
            </button>
        </div>
    );
};

export default UploadMenuData;