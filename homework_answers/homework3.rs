pub fn fizz_buzz(fizz_buzz_counter: &mut i8, fizz_counter: &mut i8, buzz_counter: &mut i8) {
    for number in 1..301 {
        if number % 15 == 0 {
            println!("fizzbuzz");
            *fizz_buzz_counter += 1;
        } else if number % 3 == 0 {
            println!("fizz");
            *fizz_counter += 1;
        } else if number % 5 == 0 {
            println!("buzz");
            *buzz_counter += 1;
        }
    }
}

fn main() {
    let mut fizz_buzz_counter = 0;
    let mut fizz_counter = 0;
    let mut buzz_counter = 0;
    fizz_buzz(&mut fizz_buzz_counter, &mut fizz_counter, &mut buzz_counter);
    
    println!("fizzbuzz: {fizz_buzz_counter}");
    println!("fizz: {fizz_counter}");
    println!("buzz: {buzz_counter}");
}