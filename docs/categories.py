import os
import yaml

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
                title = extract_file_name(file_path)
                for category in categories:
                    if category not in categories_dict:
                        categories_dict[category] = []
                    categories_dict[category].append((file, relative_path, title))
    return categories_dict

def write_categories_to_file(categories_dict, output_file):
    with open(output_file, 'w', encoding='utf-8') as file:
        for category, posts in categories_dict.items():
            file.write(f"### {category}\n\n") # category 三级标题
            for post in posts:
                file.write(f"- [{post[2]}](<{post[1]}>)\n")
            file.write("\n")

def main(posts_directory, output_file):
    root_directory = os.path.dirname(os.path.abspath(__file__))
    categories_dict = collect_posts_by_category(posts_directory, root_directory)
    write_categories_to_file(categories_dict, output_file)

if __name__ == "__main__":
    # 自定义 posts_directory 和 output_file
    custom_posts_directory = r"docs" # 自定义扫描目录
    custom_output_file = r"docs\categories.md" # 自定义输出文件

    main(custom_posts_directory, custom_output_file)