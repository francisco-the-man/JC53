import { NextRequest, NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import { join } from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: { folder: string } }
) {
  try {
    const folder = params.folder;
    
    // Validate folder name to prevent directory traversal
    if (!['desert', 'casablanca'].includes(folder)) {
      return NextResponse.json(
        { error: 'Invalid folder name' },
        { status: 400 }
      );
    }

    // Get the path to the public moodboard folder
    const publicPath = join(process.cwd(), 'public', 'moodboard', folder);
    
    // Read directory contents
    const files = await readdir(publicPath);
    
    // Filter for image files
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'];
    const images = files.filter(file => 
      imageExtensions.some(ext => 
        file.toLowerCase().endsWith(ext)
      )
    );

    return NextResponse.json({ images });
  } catch (error) {
    console.error('Error reading directory:', error);
    return NextResponse.json(
      { error: 'Failed to read directory', images: [] },
      { status: 500 }
    );
  }
} 