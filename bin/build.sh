#!/bin/bash

# build.sh - Post-build script to create flat dist structure
# Usage: ./bin/build.sh

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Get the script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

DIST_TEMP_DIR="$PROJECT_ROOT/dist-temp"
DIST_DIR="$PROJECT_ROOT/dist"

echo -e "${BLUE}🔧 Brizy Protogen TypeScript - Post Build${NC}"
echo -e "${BLUE}===========================================${NC}"

# Check if dist-temp directory exists
if [ ! -d "$DIST_TEMP_DIR" ]; then
    echo -e "${RED}❌ Error: dist-temp directory not found at $DIST_TEMP_DIR${NC}"
    echo -e "${YELLOW}💡 Make sure you run the TypeScript builds first${NC}"
    exit 1
fi

echo -e "${BLUE}📁 Creating dist directory...${NC}"
mkdir -p "$DIST_DIR"

# Copy CommonJS build and fix import paths
echo -e "${BLUE}📦 Copying CommonJS build (index.js) and fixing import paths...${NC}"
if [ -f "$DIST_TEMP_DIR/cjs/src/index.js" ]; then
    # Fix the import paths from ../gen/ to ./gen/
    sed 's|../gen/|./gen/|g' "$DIST_TEMP_DIR/cjs/src/index.js" > "$DIST_DIR/index.js"
    echo -e "${GREEN}✅ index.js copied and import paths fixed${NC}"
else
    echo -e "${RED}❌ CommonJS build not found at $DIST_TEMP_DIR/cjs/src/index.js${NC}"
    exit 1
fi

# Copy ES modules build and fix import paths
echo -e "${BLUE}📦 Copying ES modules build (index.esm.js) and fixing import paths...${NC}"
if [ -f "$DIST_TEMP_DIR/esm/src/index.js" ]; then
    # Fix the import paths from ../gen/ to ./gen/
    sed 's|../gen/|./gen/|g' "$DIST_TEMP_DIR/esm/src/index.js" > "$DIST_DIR/index.esm.js"
    echo -e "${GREEN}✅ index.esm.js copied and import paths fixed${NC}"
else
    echo -e "${RED}❌ ES modules build not found at $DIST_TEMP_DIR/esm/src/index.js${NC}"
    exit 1
fi

# Copy TypeScript declarations
echo -e "${BLUE}📦 Copying TypeScript declarations (index.d.ts)...${NC}"
if [ -f "$DIST_TEMP_DIR/types/src/index.d.ts" ]; then
    cp "$DIST_TEMP_DIR/types/src/index.d.ts" "$DIST_DIR/index.d.ts"
    echo -e "${GREEN}✅ index.d.ts copied${NC}"
else
    echo -e "${RED}❌ TypeScript declarations not found at $DIST_TEMP_DIR/types/src/index.d.ts${NC}"
    exit 1
fi

# Skip TypeScript declaration map for production build
echo -e "${YELLOW}⏭️  Skipping .map files for production build${NC}"

# Copy generated protobuf files directory structure
echo -e "${BLUE}📦 Copying generated protobuf files...${NC}"
if [ -d "$DIST_TEMP_DIR/cjs/gen" ]; then
    cp -r "$DIST_TEMP_DIR/cjs/gen" "$DIST_DIR/"
    echo -e "${GREEN}✅ Generated protobuf files copied (gen/)${NC}"
else
    echo -e "${RED}❌ Generated protobuf files not found at $DIST_TEMP_DIR/cjs/gen${NC}"
    exit 1
fi

# Copy TypeScript declarations for protobuf files (excluding .map files)
if [ -d "$DIST_TEMP_DIR/types/gen" ]; then
    echo -e "${BLUE}📦 Copying protobuf TypeScript declarations (excluding .map files)...${NC}"
    cp -r "$DIST_TEMP_DIR/types/gen"/*.d.ts "$DIST_DIR/gen/" 2>/dev/null || true
    echo -e "${GREEN}✅ Protobuf TypeScript declarations copied (production ready)${NC}"
fi

# Clean up temporary directory
echo -e "${BLUE}🧹 Cleaning up temporary files...${NC}"
rm -rf "$DIST_TEMP_DIR"
echo -e "${GREEN}✅ Temporary files cleaned${NC}"

# Show final dist structure
echo -e "${BLUE}📁 Final dist structure:${NC}"
echo -e "${YELLOW}----------------------------------------${NC}"
ls -la "$DIST_DIR"
echo -e "${YELLOW}----------------------------------------${NC}"

# Show file sizes
echo -e "${BLUE}📊 File sizes:${NC}"
for file in "$DIST_DIR"/*; do
    if [ -f "$file" ]; then
        size=$(wc -c < "$file")
        filename=$(basename "$file")
        echo -e "   📄 $filename: ${size} bytes"
    fi
done

echo -e "${GREEN}🎉 Post-build complete!${NC}"
echo -e "${YELLOW}💡 Ready for publishing with: npm publish${NC}"
