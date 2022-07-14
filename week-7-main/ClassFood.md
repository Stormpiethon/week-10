```mermaid
classDiagram
    class Food{
        +string color
        +int calories
        +int servingSize
        +eat()
        +prepare()
    }

    class Meat{
        +string type
        +string sourceAnimal
        +int cholestoral
        +int storageTemp
        +cooking(method string)
        +season(seasoningUsed)
    }

    class Vegetables{
        +string type 
        +string harvest
    }

    Food <|-- Meat 
    Food <|-- Vegetables