use anchor_lang::prelude::*;

declare_id!("C4jJgyDbQyQDDod8n3nZh5cgPV7oeRWRGDXop43yT1om");

#[program]
pub mod homework11_anchor {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
