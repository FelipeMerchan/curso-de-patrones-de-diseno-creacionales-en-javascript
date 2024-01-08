/**
 * How to implement Abstract Factory?
 *
 * 1. Declare base products classes/interfaces for each product
 *  in the catalog.
 *
 * Base products:
 *  - CPU
 *  - Memory
 *  - Display
 *
 * 2. Implement concrete products classes that inherits/implements
 *  base products classes/interfaces, the number of concrete products
 *  will depend on the number of families.
 *
 * Concrete products:
 *  - PhoneCPU
 *  - PhoneMemory
 *  - PhoneDisplay
 *  - LaptopCPU
 *  - LaptopMemory
 *  - LaptopDisplay
 *  - TabletCPU
 *  - TabletMemory
 *  - TabletDisplay
 *
 * 3. Declare abstract factory class/interface that declare creation
 *  methods for each base product. The return value could be the base
 *  products types or concrete products types.
 *
 * Abstract Factory:
 *   - AccessoryFactory
 *      * createCPUAccessory(): CPU
 *      * createMemoryAccessory(): Memory
 *      * createDisplayAccessory(): Display
 *
 * 4. Create concrete factories that implements/inherits from the
 *  abstract factory behavior and implements all the products creation
 *  methods. The number of concrete factories will depend of the number
 *  of product families.
 *
 * Concrete Factories:
 *  - PhoneFactory
 *  - LaptopFactory
 *  - TabletFactory
 *
 */

// Step 1
interface CPU {
  setSeries(series: string): void;
}

interface Memory {
  setCapacityInGB(capacity: number): void;
}

interface Display {
  setResolution(): void;
}

//Step 2
class PhoneCPU implements CPU {
  setSeries(series) {
    console.log(`[CPU] ${series} phone series`);
  }
}

class PhoneMemory implements Memory {
  setCapacityInGB(capacity) {
    console.log(`[MEMORY] ${capacity} phone capacity in GB`);
  }
}

class PhoneDisplay implements Display {
  setResolution() {
    console.log(`[DISPLAY] phone resolution`);
  }
}

class LaptopCPU implements CPU {
  setSeries(series) {
    console.log(`[CPU] ${series} Laptop series`);
  }
}

class LaptopMemory implements Memory {
  setCapacityInGB(capacity) {
    console.log(`[MEMORY] ${capacity} Laptop capacity in GB`);
  }
}

class LaptopDisplay implements Display {
  setResolution() {
    console.log(`[DISPLAY] Laptop resolution`);
  }
}

class TabletCPU implements CPU {
  setSeries(series) {
    console.log(`[CPU] ${series} Tablet series`);
  }
}

class TabletMemory implements Memory {
  setCapacityInGB(capacity) {
    console.log(`[MEMORY] ${capacity} Tablet capacity in GB`);
  }
}

class TabletDisplay implements Display {
  setResolution() {
    console.log(`[DISPLAY] Tablet resolution`);
  }
}

// Step 3
interface AccessoryFactory {
  createCPUAccessory(): CPU;
  createMemoryAccessory(): Memory;
  createDisplayAccessory(): Display;
}

// Step 4
class PhoneFactory implements AccessoryFactory {
  createCPUAccessory(): CPU {
    return new PhoneCPU();
  }

  createMemoryAccessory(): Memory {
    return new PhoneMemory();
  }

  createDisplayAccessory(): Display {
    return new PhoneDisplay();
  }
}

class LaptopFactory implements AccessoryFactory {
  createCPUAccessory(): CPU {
    return new LaptopCPU();
  }

  createMemoryAccessory(): Memory {
    return new LaptopMemory();
  }

  createDisplayAccessory(): Display {
    return new LaptopDisplay();
  }
}

class TabletFactory implements AccessoryFactory {
  createCPUAccessory(): CPU {
    return new TabletCPU();
  }

  createMemoryAccessory(): Memory {
    return new TabletMemory();
  }

  createDisplayAccessory(): Display {
    return new TabletDisplay();
  }
}

function appAccessoryFactory(factory: AccessoryFactory) {
  console.log('--- [TS] Calling appAbstractFactory ---\n');
  if (!factory) {
    console.log('--- No factory provided ---');
    return;
  }

  const cpu: CPU = factory.createCPUAccessory();
  const memory: Memory = factory.createMemoryAccessory();
  const display: Display = factory.createDisplayAccessory();

  cpu.setSeries('12345');
  memory.setCapacityInGB(64);
  display.setResolution();
}

appAccessoryFactory(new PhoneFactory());
appAccessoryFactory(new LaptopFactory());
appAccessoryFactory(new TabletFactory());