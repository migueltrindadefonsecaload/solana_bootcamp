// errors6.rs

use std::num::ParseIntError;

#[derive(PartialEq, Debug)]
enum ParsePosNonzeroError {
    Creation(CreationError),
    ParseInt(ParseIntError)
}

impl ParsePosNonzeroError {
    fn from_creation(error: CreationError) -> Self {
        ParsePosNonzeroError::Creation(error)
    }
}

fn parse_pos_nonzero(s: &str)
    -> Result<PositiveNonzeroInteger, ParsePosNonzeroError>
{
    // TODO: change this to return an appropriate error instead of panicking
    // when `parse()` returns an error. 
    let x = s.parse::<i64>();

    match x {
        Err(x) => Err(ParsePosNonzeroError::ParseInt(x)),
        Ok(x) => {
            PositiveNonzeroInteger::new(x)
                .map_err(ParsePosNonzeroError::from_creation)
        }
    }
    
}

// Don't change anything below this line.

#[derive(PartialEq, Debug)]
struct PositiveNonzeroInteger(u64);

#[derive(PartialEq, Debug)]
enum CreationError {
    Negative,
    Zero,
}

impl PositiveNonzeroInteger {
    fn new(value: i64) -> Result<PositiveNonzeroInteger, CreationError> {
        match value {
            x if x < 0 => Err(CreationError::Negative),
            x if x == 0 => Err(CreationError::Zero),
            x => Ok(PositiveNonzeroInteger(x as u64))
        }
    }
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn test_parse_error() {
        // We can't construct a ParseIntError, so we have to pattern match.
        assert!(matches!(
            parse_pos_nonzero("not a number"),
            Err(ParsePosNonzeroError::ParseInt(_))
        ));
    }

    #[test]
    fn test_negative() {
        assert_eq!(
            parse_pos_nonzero("-555"),
            Err(ParsePosNonzeroError::Creation(CreationError::Negative))
        );
    }

    #[test]
    fn test_zero() {
        assert_eq!(
            parse_pos_nonzero("0"),
            Err(ParsePosNonzeroError::Creation(CreationError::Zero))
        );
    }

    #[test]
    fn test_positive() {
        let x = PositiveNonzeroInteger::new(42);
        assert!(x.is_ok());
        assert_eq!(parse_pos_nonzero("42"), Ok(x.unwrap()));
    }
}
