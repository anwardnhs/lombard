import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pages = [
  { file: 'Businesses.tsx', label: 'Operating Subsidiaries' },
  { file: 'Contact.tsx', label: 'Contact Us' },
  { file: 'Newsroom.tsx', label: 'Media' },
  { file: 'Governance.tsx', label: 'Leadership & Board' }
];

pages.forEach(p => {
  const filePath = path.join(process.cwd(), 'src', 'pages', p.file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (!content.includes('import Breadcrumbs')) {
      content = content.replace('import Footer from "@/components/Footer";', 'import Footer from "@/components/Footer";\nimport Breadcrumbs from "@/components/Breadcrumbs";');
    }
    
    if (content.includes('<Breadcrumbs')) return; // already injected

    const match = content.match(/<h1[^>]*>/);
    if (match) {
        content = content.replace(match[0], '<Breadcrumbs items={[{ label: "' + p.label + '" }]} className="mb-6 opacity-80" />\n' + match[0]);
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Injected in ' + p.file);
  }
});
