/**
 * 템플릿 리터럴 타입 (Template Literal Type)
 *  - string literal 타입을 기반으로 특정 패턴을 갖는 문자열 타입을 만드는 기능
 *  - `${string union}-${string union}`
 *  - 문자열로 여러가지 상황을 표현할 때 유용하게 사용
 */

type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `${Color} - ${Animal}`;
// type ColoredAnimal = "red - dog" | "red - cat" | "red - chicken" | "black - dog" | "black - cat" | "black - chicken" | "green - dog" | "green - cat" | "green - chicken"
