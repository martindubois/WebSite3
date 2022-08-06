#!/bin/sh

# Author    KMS - Martin Dubois, P. Eng.
# Copyright (C) 2022 KMS
# Product   WebSite3
# File      front-end/Upload.sh

echo Executing front-end/Upload.sh

# ===== Execution ===========================================================

ftp -N netrc < Upload.sh.txt

# ===== End =================================================================

echo OK
