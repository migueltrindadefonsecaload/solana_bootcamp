// functions4.rs

fn main() {
    let mut original_price = 51;
    println!("Your sale price is {}", sale_price(&mut original_price));
}

fn sale_price(price: &mut i32) -> i32 {
    if is_even(*price) {
        *price -= 10;
    } else {
        *price -= 3;
    }

    return *price;
}

fn is_even(num: i32) -> bool {
    num % 2 == 0
}
