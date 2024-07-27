import React, { createContext,  useState } from 'react';

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
    const [brands, setBrands] = useState([
        { name: 'AFZAL', description: 'HOOKAH FLAVOR', productsCount: 1 },
        { name: 'Airistech', description: 'Drying Vaporizer Kit', productsCount: 2 },
        { name: 'AirPops', description: 'Disposable vapes', productsCount: 5 },
        { name: 'AL FHAKER', description: 'HOOKAH FLAVORS', productsCount: 1 },
        { name: 'aleda', description: 'Paper', productsCount: 1 },
        { name: 'Allo', description: 'Allo Ultra Disposable Vapes', productsCount: 4 },
        { name: 'alt', description: 'Pods', productsCount: 13 },
        { name: 'Ammo', description: 'Disposable Vape', productsCount: 3 },
        { name: 'Aspire 3K', description: 'Disposable Vape 3000 Puffs-5%', productsCount: 0 },
        { name: 'Augvape', description: '', productsCount: 1 },
        { name: 'aws', description: 'Digital weighing scale', productsCount: 1 },
        { name: 'BadShah', description: 'Charcoal', productsCount: 6 },
        { name: 'Bic', description: '', productsCount: 1 },
        { name: 'Big Time', description: 'Vape Juices', productsCount: 1 },
        { name: 'Bliss', description: 'Non-Tobacco & Tobacco Hukka Flavors & Hukka Pipes, Accessories', productsCount: 2 },
        { name: 'BMOR', description: 'Disposable Vapes', productsCount: 1 },
        { name: 'Botany Bay Bottling Co.', description: 'Vape Juices Nic Salt / Freebase', productsCount: 2 },
        { name: 'Bulls Eye', description: 'Rolling Machine, Cig Filters, Etc', productsCount: 2 },
        { name: 'Cali Salt', description: 'Vape Juice', productsCount: 1 },
        { name: 'Calliburn', description: 'Uwell Caliburn G Pod Kit, Uwell Caliburn A2 Pod Kit, Coils & PODs', productsCount: 10 },
        { name: 'charbella', description: 'Hookah big pipe', productsCount: 35 },
        { name: 'charbella', description: 'Hookah big pipe', productsCount: 10 },
        { name: 'Charlies', description: 'Vape Juices', productsCount: 0 },
        { name: 'Chosen', description: 'Chosen Premium E-liquid', productsCount: 2 },
        { name: 'Clipper', description: 'Lighters & Accessories', productsCount: 1 },
        { name: 'Cloudys', description: 'Disposable 1600 Puffs-2%', productsCount: 3 },
        { name: 'Coastal Cloud', description: 'USA Coastal Cloud Vape Juices', productsCount: 2 },
        { name: 'Cotton Bacon', description: 'Wick Cotton', productsCount: 1 },
        { name: 'Cream Team', description: 'Vape Juice', productsCount: 1 },
        { name: 'Creamio', description: 'Nic salts', productsCount: 2 },
        { name: 'Cushman', description: 'Vape juice', productsCount: 1 },
        { name: 'Custard Monster', description: 'Vape Juices', productsCount: 2 },
        { name: 'Daze', description: 'Nic Salts', productsCount: 1 },
        { name: 'DotMod', description: 'Disposable Vapes', productsCount: 0 },
        { name: 'Dr. Plumb', description: 'Dr. Plumb Pipe Premium Wooden pipe', productsCount: 1 },
        { name: 'Dragbar ICZ', description: 'Disposable Vape', productsCount: 1 },
        { name: 'Dynavap', description: 'Herb Vape', productsCount: 1 },
        { name: 'Easy Grip', description: 'Lighters', productsCount: 2 },
        { name: 'Ecigoz', description: 'Nic salts', productsCount: 1 },
        { name: 'Efest', description: 'Battery Charger', productsCount: 3 },
        { name: 'EZ Test', description: 'EZ Test Kits', productsCount: 1 },
        { name: 'fantasia', description: 'Hookah, herbal shisha', productsCount: 1 },
        { name: 'Fika', description: 'FIKA Disposable Vape', productsCount: 1 },
        { name: 'Formula 420', description: 'Glass & Ceramic Cleaning liquid', productsCount: 1 },
        { name: 'Freemax', description: 'Freemax Tank', productsCount: 4 },
        { name: 'freeton', description: 'Disposable vape', productsCount: 0 },
        { name: 'Fresh whip', description: 'Infusion chargers', productsCount: 1 },
        { name: 'Frozen Chosen', description: 'Nic Salts & Freebase Liquids', productsCount: 2 },
        { name: 'Fruit Bomb', description: 'Vape Juices', productsCount: 1 },
        { name: 'Fruit monster', description: 'Vape juices', productsCount: 1 },
        { name: 'Fruitia', description: 'Vape Juices', productsCount: 1 },
        { name: 'Geekvape', description: 'Vapes, Pods & Coils', productsCount: 25 },
        { name: 'Glass', description: '', productsCount: 79 },
        { name: 'Go2', description: 'Go2 Disposable Vape', productsCount: 1 },
        { name: 'GunnPod', description: 'Disposable Vape', productsCount: 1 },
        { name: 'H Upmann', description: 'Cigar', productsCount: 1 },
        { name: 'HERBAL CLEAN', description: 'Dietary supplements', productsCount: 4 },
        { name: 'Hunting Cloudz', description: 'Vape Juices', productsCount: 2 },
        { name: 'IGET', description: 'Disposable Vape', productsCount: 7 },
        { name: 'IGO', description: 'Disposable Vapes', productsCount: 1 },
        { name: 'IJOY', description: 'Vapes, Pods & Coils', productsCount: 3 },
        { name: 'IMREN', description: 'Batteries', productsCount: 1 },
        { name: 'Inmood', description: '', productsCount: 5 },
        { name: 'Innokin', description: 'Vape kit/machine', productsCount: 10 },
        { name: 'iPuffs', description: 'Disposable Vape', productsCount: 0 },
        { name: 'IVG', description: 'Vape juice', productsCount: 2 },
        { name: 'JERK', description: 'Vape Juices', productsCount: 2 },
        { name: 'Jose L Piedra', description: 'Cigars', productsCount: 1 },
        { name: 'Juicy Jays', description: 'Juicy Jays Flavoured Rolling Papers', productsCount: 2 },
        { name: 'Kingtons', description: 'Kingtons BLK Vaporizer Kit', productsCount: 1 },
        { name: 'Kiwi Catering', description: 'Cream Chargers and Supplies', productsCount: 1 },
        { name: 'Kush', description: 'Herbal Wraps', productsCount: 1 },
        { name: 'Lemonade Monster', description: 'Vape Juices', productsCount: 2 },
        { name: 'LG', description: 'Electronic goods', productsCount: 1 },
        { name: 'Lighta', description: 'Lighters, Butane & Fluid', productsCount: 3 },
        { name: 'Lim Puro', description: 'Glass Cleaning Solution', productsCount: 1 },
        { name: 'Lion Labs', description: 'Vaping Products Supplier', productsCount: 1 },
        { name: 'Loewe', description: 'Loewe Premium Wooden Pipes', productsCount: 1 },
        { name: 'Magical Butter', description: '', productsCount: 1 },
        { name: 'Masterdam', description: 'Rolling Supplies', productsCount: 1 },
        { name: 'Mevol', description: 'Disposable Vapes and Pods', productsCount: 2 },
        { name: 'Mini-Marine Yanhu', description: 'Hookah pipe', productsCount: 1 },
        { name: 'Misc', description: '', productsCount: 8 },
        { name: 'Molicel', description: 'Rechargeable Battery', productsCount: 1 },
        { name: 'Montecristo', description: 'Montecristo Cigars', productsCount: 1 },
        { name: 'mosa', description: 'Cream chargers', productsCount: 1 },
        { name: 'Mr Wicky Salts', description: 'Vape Juice', productsCount: 1 },
        { name: 'Nasty', description: 'Disposable Vapes & Vape Juices', productsCount: 6 },
        { name: 'Nitecore', description: 'Nitecore Intellicharger Battery Chargers', productsCount: 1 },
        { name: 'NKD 100', description: 'NKD 100 Vape Juice Salts', productsCount: 1 },
        { name: 'Not Another Tobacco', description: 'Nic salts & Freebase', productsCount: 1 },
        { name: 'Oh! Fudge', description: 'Vape Juice', productsCount: 1 },
        { name: 'OKK', description: 'Disposable Pod System', productsCount: 2 },
        { name: 'ORO', description: 'DISPOSABLE VAPE', productsCount: 0 },
        { name: 'Pacha Mama', description: 'Vape Juice', productsCount: 3 },
        { name: 'Partagas', description: 'Cigars', productsCount: 1 },
        { name: 'Philip Morris', description: 'Tobacco Manufacturer', productsCount: 4 },
        { name: 'Promethus', description: '', productsCount: 2 },
        { name: 'Quick Whip', description: 'Cream Chargers', productsCount: 1 },
        { name: 'Quintero Panatellas', description: 'Cigars', productsCount: 1 },
        { name: 'Randy', description: 'Hemp weak strings', productsCount: 1 },
        { name: 'RAW', description: 'Papers', productsCount: 13 },
        { name: 'Reckless', description: 'Vape juice', productsCount: 2 },
        { name: 'Red Apple', description: 'Vape Juices', productsCount: 2 },
        { name: 'RELX', description: 'Pods/Machine Kit/Vape', productsCount: 6 },
        { name: 'Remarkable Salts', description: 'Nic Salts & Freebase Liquids', productsCount: 2 },
        { name: 'Rocket Lighter', description: '', productsCount: 1 },
        { name: 'Romeo Y Julieta', description: 'Romeo Y Julieta Cigars', productsCount: 1 },
        { name: 'Sadboy', description: 'Vape Juices', productsCount: 5 },
        { name: 'Salty Beaver Freebase', description: 'Freebase Vape Juices', productsCount: 2 },
        { name: 'Sharpstone', description: '', productsCount: 5 },
        { name: 'Sierra Vape Juice', description: 'Sierra Vape Juice', productsCount: 1 },
        { name: 'Simply', description: 'Simply Salts Vape Juices', productsCount: 2 },
        { name: 'Six Licks', description: 'Vape Juices', productsCount: 2 },
        { name: 'Skunk', description: '', productsCount: 1 },
        { name: 'SMOK', description: 'Vapes & Disposable Vapes', productsCount: 42 },
        { name: 'Smoke Buddy', description: '', productsCount: 1 },
        { name: 'SMOKING', description: 'ROLLING HEMP PAPERS, KING SIZE', productsCount: 2 },
        { name: 'Solo', description: 'Disposable Vape', productsCount: 3 },
        { name: 'Strapped', description: 'Vape Juices', productsCount: 6 },
        { name: 'Stunden Glass', description: '', productsCount: 1 },
        { name: 'Sun Bear', description: 'Vape Juice', productsCount: 1 },
        { name: 'Sunakin', description: 'Dry Herb Vaporiser', productsCount: 1 },
        { name: 'Suntree', description: 'Disposable Vapes', productsCount: 0 },
        { name: 'Supreme Cola', description: 'Cola Nic Salts', productsCount: 0 },
        { name: 'Supreme Lemonade', description: 'Supereme Lemonade Vape Juices', productsCount: 0 },
        { name: 'Supreme Soda', description: '', productsCount: 4 },
        { name: 'Sweet As Bro', description: 'Vape Juices', productsCount: 6 },
        { name: 'Taru', description: 'Charcoal', productsCount: 1 },
        { name: 'TASTY PUFF', description: 'Hookah, Shisha, Juice', productsCount: 1 },
        { name: 'The Salty One', description: 'Nic Salts', productsCount: 1 },
        { name: 'Tobacco', description: 'Pipes', productsCount: 18 },
        { name: 'Upends', description: 'Disposable Vapes', productsCount: 2 },
        { name: 'Uwell', description: 'Vape Kits, Coils, Pods & Accessory', productsCount: 14 },
        { name: 'Vapelusion', description: 'Mods and Vape Kits', productsCount: 1 },
        { name: 'Vapetasia', description: 'Vape Juices', productsCount: 3 },
        { name: 'Vaporesso', description: 'Vaporesso Pod Kits, Pods & Coils', productsCount: 28 },
        { name: 'Vaporium', description: 'Vaporium Vape Juices', productsCount: 4 },
        { name: 'Vapour Eyes', description: 'Vape Juices', productsCount: 1 },
        { name: 'Voopoo', description: '', productsCount: 11 },
        { name: 'Vorteke', description: '', productsCount: 2 },
        { name: 'Vosol', description: 'Disposable vape', productsCount: 0 },
        { name: 'Vuse', description: 'Disposable vapes and PODs', productsCount: 9 },
        { name: 'Wotofo', description: 'Disposable vapes', productsCount: 0 },
        { name: 'Yeti', description: 'Vape Juices', productsCount: 3 },
        { name: 'Yocan', description: 'Dry Herb Vaporisers', productsCount: 8 },
        { name: 'Zigzag', description: 'ZigZag', productsCount: 1 },
        { name: 'Zippo', description: 'Zippo Premium Lighters & Gift Packs', productsCount: 3 },
        { name: 'Zumwalt', description: 'Vapes, Pods & Coil', productsCount: 2 },
      ]);
      
      const [categories, setCategories] = useState([
        { name: 'Battery', productsCount: 5 },
        { name: 'Coil', productsCount: 32 },
        { name: 'Detox', productsCount: 5 },
        { name: 'Disposable Vape', productsCount: 47 },
        { name: 'hookah machine', productsCount: 41 },
        { name: 'Misc.', productsCount: 76 },
        { name: 'MOD KIT', productsCount: 2 },
        { name: 'POD', productsCount: 57 },
        { name: 'RAW Keychain', productsCount: 1 },
        { name: 'Tank', productsCount: 16 },
        { name: 'Tobacco', productsCount: 91 },
        { name: 'Vape Accessory', productsCount: 11 },
        { name: 'Vape Juice', productsCount: 90 },
        { name: 'Vape Kit', productsCount: 79 }
      ]);
      
      const [suppliers, setSuppliers] = useState([
        { name: 'COTD', description: 'Disposable Vapes', productsCount: 1 },
        { name: 'DHIMAHI TRADING LIMITED', description: '', productsCount: 7 },
        { name: 'DT Vape', description: 'Airscreams', productsCount: 3 },
        { name: 'Kiwi Catering', description: '', productsCount: 1 },
        { name: 'KPL', description: 'Zippo lighters & Juicy Jay\'s', productsCount: 4 },
        { name: 'Lion Lab', description: 'Vape Juices', productsCount: 55 },
        { name: 'Magical Butter', description: '', productsCount: 1 },
        { name: 'Mevol', description: '', productsCount: 2 },
        { name: 'mission', description: '', productsCount: 6 },
        { name: 'NZTG', description: 'New Zealand Tobacco Group - Cigars', productsCount: 6 },
        { name: 'Phillip Morris', description: '', productsCount: 4 },
        { name: 'QSSL', description: '', productsCount: 2 },
        { name: 'SunTree', description: 'Disposable Vapes', productsCount: 0 },
        { name: 'Titex Group', description: 'Lighters, Torch, Butane Gas, etc', productsCount: 7 },
        { name: 'Top Trade International Ltd', description: 'Upends, BMOR, Uwell, Vaporesso, SMOK, G-Priv, I-Joy, Sweet As Bro, Charlies, Pachamama USA Coastal Cloud', productsCount: 171 },
        { name: 'Vape HQ', description: 'Vapes, Vape Juices, etc.', productsCount: 34 },
        { name: 'Vape Traders New Zealand', description: '', productsCount: 67 },
        { name: 'Vapeyes', description: '', productsCount: 2 },
        { name: 'Vapeys Wholesale', description: 'Disposable Vape', productsCount: 7 },
        { name: 'Vapo', description: 'Pods, Coils, Vape Kits, Accessories, etc.', productsCount: 41 },
        { name: 'Zumwalt', description: 'Vapes, Pods & Coil', productsCount: 2 }
      ]);
      
      const [tags, setTags] = useState([]);



    //   Brands Add Function
      const addBrand = (brand) => {
        setBrands([...brands, brand]);
      };

      const editBrand = (index, updatedBrand) => {
        const updatedBrands = brands.map((brand, i) => (i === index ? updatedBrand : brand));
        setBrands(updatedBrands);
      };
    
      const deleteBrand = (index) => {
        const updatedBrands = brands.filter((_, i) => i !== index);
        setBrands(updatedBrands);
      };


    //   Category Add Function

    const addCategory = (newCategory) => {
        setCategories([...categories, newCategory]);
      };
    
      const editCategory = (index, updatedCategory) => {
        const updatedCategories = categories.map((category, i) =>
          i === index ? updatedCategory : category
        );
        setCategories(updatedCategories);
      };
    
      const deleteCategory = (index) => {
        const updatedCategories = categories.filter((_, i) => i !== index);
        setCategories(updatedCategories);
      };

        
    //   Supplier Add Function

    const addSupplier = (supplier) => {
        setSuppliers([...suppliers, supplier]);
      };
    
      const editSupplier = (index, updatedSupplier) => {
        const newSuppliers = [...suppliers];
        newSuppliers[index] = updatedSupplier;
        setSuppliers(newSuppliers);
      };
    
      const deleteSupplier = (index) => {
        const newSuppliers = suppliers.filter((_, i) => i !== index);
        setSuppliers(newSuppliers);
      };


    //   Product Tags 

    const addTag = (tag) => {
        setTags([...tags, tag]);
      };
    
      const editTag = (index, updatedTag) => {
        const newTags = [...tags];
        newTags[index] = updatedTag;
        setTags(newTags);
      };
    
      const deleteTag = (index) => {
        const newTags = tags.filter((_, i) => i !== index);
        setTags(newTags);
      };

  const contextValue = {
    addBrand,
    editBrand,
    deleteBrand,
    brands,
    categories,
    suppliers,
    tags,
    addCategory,
    editCategory,
    deleteCategory,
    addSupplier,
    editSupplier,
    deleteSupplier,
    addTag,
    editTag,
    deleteTag

  };

 
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;