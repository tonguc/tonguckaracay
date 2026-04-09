#!/bin/bash
# Bot başlatma scripti (PM2 tarafından çalıştırılır)

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

source venv/bin/activate
exec python bot.py
