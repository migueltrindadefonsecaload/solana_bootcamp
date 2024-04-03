// strings1.rs

fn main() {
    let answer = current_favorite_course();
    println!("My course is {}", answer);
}

fn current_favorite_course() -> String {
    String::from("Solana")
}
