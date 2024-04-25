use anchor_lang::prelude::*;

declare_id!("FP6FvFfkEjZq14sbbsS4PJCU3LB2NXLsnauDToXxz13E");

#[program]
pub mod hello {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
