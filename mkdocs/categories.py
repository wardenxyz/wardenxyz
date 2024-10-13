import os
import yaml

def extract_first_heading(file_path):
    """Extract the first H1 heading from a Markdown file."""
    with open(file_path, 'r', encoding='utf-8') as file:
        for line in file:
            if line.startswith('# '):  # 检查是否为一级标题
                return line.strip('# ').strip()  # 去除 '#' 并返回标题文本
    return None  # 如果没有找到一级标题，则返回 None

def extract_categories(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    if content.startswith('---'):
        parts = content.split('---', 2)
        if len(parts) >= 3:
            yaml_content = parts[1]
            yaml_data = yaml.safe_load(yaml_content)
            return yaml_data.get('categories', [])
    return []

def extract_file_name(file_path):
    return os.path.splitext(os.path.basename(file_path))[0]

def collect_posts_by_category(directory, root_directory):
    categories_dict = {}
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                relative_path = os.path.relpath(file_path, root_directory).replace(os.sep, '/')
                categories = extract_categories(file_path)
                # 尝试从文件中获取一级标题作为链接文本
                title = extract_first_heading(file_path) or extract_file_name(file_path)
                for category in categories:
                    if category not in categories_dict:
                        categories_dict[category] = []
                    categories_dict[category].append((file, relative_path, title))
    return categories_dict

def write_categories_to_file(categories_dict, output_file):
    header_lines = []
    if os.path.exists(output_file):
        with open(output_file, 'r', encoding='utf-8') as file:
            header_lines = [next(file) for _ in range(4)]  # 读取前四行

    with open(output_file, 'w', encoding='utf-8') as file:
        file.writelines(header_lines)  # 写回前四行
        for category, posts in categories_dict.items():
            file.write(f"## {category}\n\n")  # category 三级标题
            for post in posts:
                file.write(f"- [{post[2]}](<{post[1]}>)\n")
            file.write("\n")

def main(posts_directory, output_file):
    root_directory = os.path.dirname(os.path.abspath(__file__))
    categories_dict = collect_posts_by_category(posts_directory, root_directory)
    write_categories_to_file(categories_dict, output_file)

if __name__ == "__main__":
    # 自定义 posts_directory 和 output_file
    custom_posts_directory = r"mkdocs"  # 自定义扫描目录
    custom_output_file = r"mkdocs\categories.md"  # 自定义输出文件

    main(custom_posts_directory, custom_output_file)